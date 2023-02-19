import React from 'react';
import Home from './pages/home/Home';
import {Filter} from './pages/components/Filter/Filter';
import {MedicCard} from './pages/components/MedicCard/MedicCard';

function App(): JSX.Element {
  return (
    <>
      <Home />
    </>

  // <div
  //   style={{
  //     display: 'flex',
  //     gap: '10rem',
  //   }}
  // >
  //   <Filter/>
  //   <MedicCard/>;
  // </div>
  );
}

export default App;
