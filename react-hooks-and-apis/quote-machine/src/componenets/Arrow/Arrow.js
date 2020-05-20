import React from 'react';

const Arrow = (props) => {
  return (
    <button
      type="button"
      className={`arrow arrow--${props.side}`}
      onClick={() => props.clicked(props.side)}
      >
    </button>
  );
}

export default Arrow;
