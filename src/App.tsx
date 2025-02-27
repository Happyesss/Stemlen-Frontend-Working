import './App.css';
import { createTheme, MantineProvider, MantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './AppRoutes';

function App() {
  // Read theme from localStorage and ensure it's a valid MantineColorScheme
  const savedTheme = (localStorage.getItem("theme") as MantineColorScheme) || "light";

  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'blue',
    primaryShade: 4, 
    colors: {
      'cape-cod': ['#f5f8f7', '#e0e7e6', '#c0cfcc', '#99afab', '#748d8a', '#597370', '#465b59', '#3b4a49', '#364342', '#2c3534', '#161d1d'],
      'blue': ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'],
    }
  });

  return (
    <Provider store={Store}>
      <MantineProvider defaultColorScheme={savedTheme} theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <AppRoutes />
      </MantineProvider>
    </Provider>
  );
}

export default App;
