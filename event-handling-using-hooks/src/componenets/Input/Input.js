import React from 'react';

const Input = (props) => {

  return (
    <div className="form__field">
      <label class="form__label" for={props.name}> {props.label} </label>
      <input
        type={props.type}
        className={props.cssClass}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
