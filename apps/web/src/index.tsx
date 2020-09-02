import 'stop-runaway-react-effects/hijack';
import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import ReactDOM from 'react-dom';
import { theme, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';

import 'fonts/introrustg_base2line_macroman/stylesheet.css';
import App from './app';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('@flyshop/test-utils');
    worker(process.env.REACT_APP_API_URL!).start();
  }

  const globalStyles = {
    body: {
      backgroundColor: theme.colors.gray[200],
    },
  };

  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
      <ReactQueryDevtools />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

main();
