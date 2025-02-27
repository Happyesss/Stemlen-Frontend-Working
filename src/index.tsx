import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from './ThemeContext';

// Get the user's last selected theme or default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={{ colorScheme: 'dark' } as any}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
