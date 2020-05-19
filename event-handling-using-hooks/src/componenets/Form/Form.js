import React, { useState } from 'react';

import Input from '../Input/Input';

const Form = (props) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    props.isResetPassword ? props.setCurrentSide('login') : props.setCurrentSide('logged');
  };

  const formRender = () => {
    if (!props.isResetPassword) {
      return (
        <form className="form" action="">
          <Input
            type="email"
            placeholder="Email Address"
            label="Email Address: "
            name="login-email"
            value={emailInput}
            onChange={(evt) => setEmailInput(evt.target.value)}
          ></Input>

          <Input
            type="password"
            placeholder="Password"
            label="Password: "
            name="login-password"
            value={passwordInput}
            onChange={(evt) => setPasswordInput(evt.target.value)}
          ></Input>
          <div className="form__controls">
            <button
              className="form__button"
              type="submit"
              onClick={(evt) => handleFormSubmit(evt)}
            >Log in
            </button>
            <button
              type="button"
              className="form__link"
              onClick={() => props.setCurrentSide('reset')}
            >Forgot Password?
            </button>
          </div>
        </form>
      );
    }
    return (
      <form className="form" action="">
        <Input
          type="email"
          placeholder="Email Address"
          label="Email Address: "
          name="login-email"
          value={emailInput}
          onChange={(evt) => setEmailInput(evt.target.value)}
        ></Input>
        <div className="form__controls">
          <button
            className="form__button"
            type="submit"
            onClick={(evt) => handleFormSubmit(evt)}
          >Reset
          </button>
          <button
            type="button"
            className="form__link form__link--cancel"
            onClick={() => props.setCurrentSide('login')}
          >Cancel
          </button>
        </div>
      </form>
    );
  };

  return formRender();
};

export default Form;
