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

]

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Arrow side="left" />
        <Quotes />
        <Arrow side="right"/>

      </div>
      <Logo />
    </React.Fragment>
  );
}

export default App;
