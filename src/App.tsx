import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import RouterConfig from './router/RouterConfig';
import { createMyTheme } from './mui';


function App() {
  return (
    <ThemeProvider theme={createMyTheme()}>
      <CssBaseline />
      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
