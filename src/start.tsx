import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Authenticator } from '@aws-amplify/ui-react';
import './index.css';
import Auth from './auth';
import { ThemeProvider } from './components/theme-provider';

// We should move ThemeProvider to just above the first view

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Authenticator.Provider>
        <Auth />
      </Authenticator.Provider>
    </ThemeProvider>
  </StrictMode>
);
