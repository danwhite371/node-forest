import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/data/resource';
import { AWSNote } from '@/types';
import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

export default function NoteList() {
  const [notes, setNotes] = useState<AWSNote[]>();
  const { user, authStatus } = useAuthenticator((context) => [
    context.user,
    context.authStatus,
  ]);
  const authenticated = user != undefined;

  // const getData = async () => {
  //   const authMode = authenticated ? 'userPool' : 'identityPool';

  //   const { data, errors } = await client.models.Note00001.list({
  //     authMode,
  //   });
  //   if (errors) {
  //     console.error('[NoteList] errors', errors);
  //   }
  //   if (errors == undefined && data != undefined) {
  //     setNotes(data);
  //   }
  // };

  useEffect(() => {
    let sub: any;
    if (authStatus == 'authenticated' || authStatus == 'unauthenticated') {
      const authMode = authenticated ? 'userPool' : 'identityPool';
      sub = client.models.Note00001.observeQuery({ authMode }).subscribe({
        next: ({ items }) => {
          console.log('[NoteList] useEffect, items.length', items.length);
          setNotes(items);
        },
      });
    }
    return () => {
      if (sub !== undefined) sub.unsubscribe();
    };
  }, [user, authStatus]);

  return (
    <div>
      {notes?.map((note) => (
        <div
          key={note.id}
          className="border border-border bg-background text-foreground p-2"
        >
          {note.content}
        </div>
      ))}
    </div>
  );
}
