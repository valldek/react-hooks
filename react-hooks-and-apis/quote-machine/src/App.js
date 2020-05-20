import React, { useState } from 'react';

import Quotes from './componenets/Quotes/Quotes';
import Arrow from './componenets/Arrow/Arrow';
import Logo from './componenets/Logo/Logo';

const data = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
];

const App = () => {
  const [ current, setCurrent ] = useState(0);

  const handleArrowClick = (side) => {
    if (current === 0 ) {
      side === 'left' ? setCurrent(current) : setCurrent(current + 1);
    } else if (current === data.length - 1) {
      side === 'left' ? setCurrent(current - 1) : setCurrent(current) ;
    } else {
      side === 'left' ? setCurrent(current - 1) : setCurrent(current + 1) ;
    }

    // fetch quote
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="carousel">
          <Arrow side="left" clicked={handleArrowClick}/>
          <Quotes quotes={data.slice(current, current + 2)}/>
          <Arrow side="right" clicked={handleArrowClick}/>
        </div>

      </div>
      <Logo />
    </React.Fragment>
  );
}

export default App;
