import './App.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';
import { RouterProvider } from 'react-router';
import { router } from './routes/Router';
import { Notifications } from '@mantine/notifications';
import '@mantine/charts/styles.css';

const theme = createTheme({
  fontFamily: "Inter",
});

function App() {

  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <>
      <MantineProvider theme={theme}>
        <Notifications />
        <AuthProvider store={store}>
          <RouterProvider router={router} />
        </AuthProvider>
      </MantineProvider>
    </>
  )
}

export default App

//  nvm use 20