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
import { Location, signOut, AWSUser } from '@/types';

type UserDropDownProps = {
  setLocation: (location: Location) => void;
  signOut: signOut;
  user: AWSUser;
};
export function UserDropDown({
  setLocation,
  signOut,
  user,
}: UserDropDownProps) {
  // const { user, signOut } = useAuthenticator((context) => [context.user]);
  // console.log('[UserDropDown] user, authStatus', user);
  const authenticated = user !== undefined;

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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        {authenticated && (
          <DropdownMenuLabel className="text-sm">
            {user.signInDetails?.loginId}
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {!authenticated && (
          <DropdownMenuItem
            onClick={async () => {
              setLocation('signin');
            }}
          >
            Sign in
          </DropdownMenuItem>
        )}

        {authenticated && (
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
