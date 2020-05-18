import React from 'react';

const Side = (props) => {
  return (
    <div className={ `side ${props.cssClass}` }>
      {props.children}
    </div>
  );
}

export default Side;
