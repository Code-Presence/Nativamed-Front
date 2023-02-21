import React from 'react';
import Home from './pages/home/Home';
import {Filter} from './pages/components/Filter/Filter';
import {MedicCard} from './pages/components/MedicCard/MedicCard';
import {MuiAccordion} from './pages/components/Faq';
import Accordion from './pages/components/Accordion';

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
  //   <Accordion />
  // </div>
  );
}

export default App;
