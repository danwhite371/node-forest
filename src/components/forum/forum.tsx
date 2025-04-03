import { ModeToggle } from '../mode-toggle';
import { UserDropDown } from './user-dropdown';
import ContainerWrapper from './container-wrapper';
import Footer from './footer';
import Header from './header';
import MainContent from './main-content';
import OuterFrame from './outer-frame';
import Container from './container';
import AddNoteForm from './add-note-form';
import NoteList from './note-list';
import { AWSUser, Location, signOut } from '@/types';

type ForumProps = {
  setLocation: (location: Location) => void;
  signOut: signOut;
  user: AWSUser;
};
export default function Forum({ setLocation, signOut, user }: ForumProps) {
  const authenticated = user !== undefined;
  return (
    <OuterFrame>
      <Header>
        <ContainerWrapper>
          <Container className="flex h-14 justify-between items-center gap-2 md:gap-4">
            <div className="font-bold text-lg">Node Forest</div>
            <div>
              {authenticated && (
                <span className="mr-2">{user.signInDetails?.loginId}</span>
              )}
              <ModeToggle />{' '}
              <UserDropDown
                setLocation={setLocation}
                signOut={signOut}
                user={user}
              />
            </div>
          </Container>
        </ContainerWrapper>
      </Header>
      <MainContent className="flex flex-col justify-center items-center">
        {authenticated && <AddNoteForm />}
        <NoteList />
      </MainContent>
      <Footer className="text-muted-foreground">This is a footer</Footer>
    </OuterFrame>
  );
}
