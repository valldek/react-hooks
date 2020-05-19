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
            cssClass="form__input"
            placeholder="Email Address"
            label="Email Address: "
            name="login-email"
            value={emailInput}
            onChange={(evt) => setEmailInput(evt.target.value)}
          ></Input>

          <Input
            type="password"
            cssClass="form__input"
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
            <a
              className="form__link"
              href="#"
              onClick={() => props.setCurrentSide('reset')}
            >Forgot Password?
            </a>
          </div>
        </form>
      );
    }
    return (
      <form className="form" action="">
        <Input
          type="email"
          cssClass="form__input"
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
          <a
            className="form__link form__link--cancel"
            href="#"
            onClick={() => props.setCurrentSide('login')}
          >Cancel
          </a>
        </div>
      </form>
    );
  };

  return formRender();
};

export default Form;
