import React from 'react';
import Home from './pages/home/Home';

import ReactGA from 'react-ga';

ReactGA.initialize('G-TH17641HP4');
function App(): JSX.Element {
  return (
    <Home />

  );
}

export default App;
