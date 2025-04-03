import { type Schema } from '../amplify/data/resource';

type ChildrenProps = {
  children?: React.ReactNode;
};

type ClassNameProps = {
  className?: string;
};

type Location = 'home' | 'signin';

type AWSNote = Schema['Note00001']['type'];

type SignInDetails = {
  authFlowType?: string;
  loginId?: string;
};

type AWSUser =
  | {
      userId: string;
      username: string;
      signInDetails?: SignInDetails;
    }
  | undefined;

type signOut = () => void;

export type {
  ChildrenProps,
  ClassNameProps,
  Location,
  AWSNote,
  AWSUser,
  signOut,
};
