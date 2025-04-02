// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { AuthUser } from 'aws-amplify/auth';
import './App.css';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import Forum from './components/forum';
import '@aws-amplify/ui-react/styles.css';
import { useLocation } from './components/location-provider';
import { useEffect, useRef } from 'react';
import { Location } from './types';
// import SignIn from "./components/sign-in";

Amplify.configure(outputs);

// "signedOut", signedIn

function App() {
  const { location, setLocation } = useLocation();
  const locationRef = useRef<Location>('home');
  const userRef = useRef<AuthUser>(null);
  const { authStatus, user, route } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
    context.route,
  ]);
  userRef.current = user;
  console.log(
    `[App] location: '${location}', authStatus:'${authStatus}', route:'${route}'`,
    user
  );

  useEffect(() => {
    if (
      user != undefined &&
      location === 'signin' &&
      route == 'authenticated'
    ) {
      console.log('[App] useEffect - setLocation - home');
      setLocation('home');
    }
  }, [location, user, route]);

  // useEffect(() => {
  //   Hub.listen('auth', ({ payload }) => {
  //     console.log(
  //       `[App] useEffect: event: '${payload.event}' location: '${locationRef.current}'`,
  //       userRef.current
  //     );
  //   });
  // }, []);

  locationRef.current = location;
  // useEffect(() => {
  //   Hub.listen('auth', ({ payload }) => {
  //     console.log(
  //       '[App] payload.event,authStatus, location, user',
  //       payload.event,
  //       authStatus,
  //       locationRef.current,
  //       user
  //     );
  //     if (
  //       payload.event === 'signedIn' &&
  //       locationRef.current === 'signin' &&
  //       authStatus != 'configuring'
  //     ) {
  //       console.log('[App] setLocation - home');
  //       setLocation('home');
  //     }
  //   });
  // }, []);

  // if (authStatus !== 'authenticated') {
  //   setLocation('home');
  //   return <Forum />;
  // }
  if (location === 'signin') return <Authenticator />;
  return <Forum />;
}

export default App;
