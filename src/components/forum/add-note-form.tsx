import { ChangeEvent, useState } from 'react';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export default function AddNoteForm() {
  const [noteText, setNoteText] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
  };
  async function createNote(content: string) {
    const { data, errors } = await client.models.Note00001.create(
      { content },
      { authMode: 'userPool' }
    );
    console.log(data, errors);
    setNoteText('');
  }
  const submitOnClick = () => {
    console.log('[AddNoteForm] submitOnClick', noteText);
    createNote(noteText);
  };
  return (
    <div>
      <input
        type="text"
        value={noteText}
        required
        minLength={1}
        maxLength={300}
        onChange={onChange}
      />
      <button onClick={submitOnClick}>Submit</button>
    </div>
  );
}
