import React from 'react';

const Quote = (props) => {
  return (
    <div className={`quote quote--${props.cssClass}`}>
      <p className="quote__text">{props.quote}</p>
      <span className="quote__author">{props.author}</span>
    </div>
  )
}

export default Quote;
