import React from 'react';
import Home from './pages/home/Home';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/routes';

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
