// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import Forum from "./components/forum";
import { useLocation } from "./components/location-provider";
import SignIn from "./components/sign-in";

function App() {
  const { location } = useLocation();

  if (location === "home") {
    return <Forum />;
  } else {
    return <SignIn />;
  }
}

export default App;
