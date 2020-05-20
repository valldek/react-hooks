import React from 'react';

import Quote from './Quote';

const Quotes = (props) => {
  const getQuotes = () => {
    return props.quotes.map((val, idx) => {
      return (
        <Quote key={`quote-${idx}`} quote={val.quote} author={val.author} cssClass={idx % 2 ? 'back' : 'front'}/>
      )
    })
  }

  return (
    <div className="quotes" style={{transform: `rotateY(${180*props.current}deg)`}}>
      {getQuotes()}
    </div>
  )
}

export default Quotes;
