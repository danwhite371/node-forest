// import { Button } from "@/components/ui/button";
import { CircleUserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { useLocation } from '../location-provider';
import { useAuthenticator } from '@aws-amplify/ui-react';

export function UserDropDown() {
  const { setLocation } = useLocation();
  const { user, signOut, authStatus } = useAuthenticator((context) => [
    context.user,
  ]);
  console.log('[UserDropDown] user, authStatus', user, authStatus);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <Button variant="outline" size="icon">
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Button>
        </Avatar>
        {/* <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        {authStatus === 'authenticated' && user && (
          <DropdownMenuLabel className="text-sm">
            {user.signInDetails?.loginId}
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {authStatus === 'unauthenticated' && (
          <DropdownMenuItem
            onClick={async () => {
              setLocation('signin');
            }}
          >
            Sign in
          </DropdownMenuItem>
        )}

        {authStatus === 'authenticated' && (
          <DropdownMenuItem
            onClick={async () => {
              signOut();
            }}
          >
            Sign out
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
