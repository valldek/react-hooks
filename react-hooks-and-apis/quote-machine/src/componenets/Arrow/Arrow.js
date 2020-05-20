import React from 'react';

const Arrow = (props) => {
  return (
    <button type="button" className={`arrow arrow--${props.side}`}>
    </button>
  );
}

export default Arrow;
