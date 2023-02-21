
import React, { useState } from 'react';
import './styles.css';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index: any) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div>
      <h2>FAQ</h2>
      <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>Section 1</button>
      <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Section 2</button>
      <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>Section 3</button>
      <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Accordion;
