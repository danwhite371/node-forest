import { ModeToggle } from '../mode-toggle';
import { UserDropDown } from './user-dropdown';
import ContainerWrapper from './container-wrapper';
import Footer from './footer';
import Header from './header';
import MainContent from './main-content';
import OuterFrame from './outer-frame';
import Container from './container';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Forum() {
  const { user } = useAuthenticator((context) => [context.user]);
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
              <ModeToggle /> <UserDropDown />
            </div>
          </Container>
        </ContainerWrapper>
      </Header>
      <MainContent>Main content</MainContent>
      <Footer className="text-muted-foreground">This is a footer</Footer>
    </OuterFrame>
  );
}
