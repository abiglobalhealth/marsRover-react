import React from 'react';
import Home from './pages/home/home';
import { StateProvider } from './state';

const App = () => {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}

export default App;
