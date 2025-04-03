// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './app.css';
import { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../amplify_outputs.json';
import Forum from './components/forum';
import { Location } from './types';

Amplify.configure(outputs);

function Auth() {
  // const { location, setLocation } = useLocation();
  const [location, _setLocation] = useState<Location>('home');

  const {
    authStatus,
    user,
    route,
    signOut: _signOut,
  } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
    context.route,
  ]);

  function singOut() {
    _signOut();
  }

  function setLocation(location: Location) {
    _setLocation(location);
  }

  console.log(
    `[Auth] location: '${location}', authStatus:'${authStatus}', route:'${route}'`,
    user
  );

  useEffect(() => {
    if (
      user != undefined &&
      location === 'signin' &&
      route == 'authenticated'
    ) {
      console.log('[Auth] useEffect - setLocation - home');
      setLocation('home');
    }
  }, [location, user, route]);

  if (location === 'signin') return <Authenticator />;
  return <Forum setLocation={setLocation} signOut={singOut} user={user} />;
}

export default Auth;
