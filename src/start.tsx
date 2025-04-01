import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import { ThemeProvider } from './components/theme-provider';
import { LocationProvider } from './components/location-provider';
import { Authenticator } from '@aws-amplify/ui-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Authenticator.Provider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </Authenticator.Provider>
    </ThemeProvider>
  </StrictMode>
);
