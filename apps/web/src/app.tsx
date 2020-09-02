import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Router } from '@reach/router';

import UncaughtError from 'components/uncaught-error';
import Nav from 'components/nav';
import Home from 'screens/home';
import Shop from 'screens/shop';
import About from 'screens/about';

function App() {
  const [uncaughtError, setUncaughtError] = useState(0);

  return (
    <>
      <Nav />
      <ErrorBoundary
        FallbackComponent={UncaughtError}
        onReset={() => setUncaughtError(u => u + 1)}
        resetKeys={[uncaughtError]}
      >
        <Router>
          <Home path="/" />
          <About path="about" />
          <Shop path="shop" />
          <Shop path="shop/:categoryName" />
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
