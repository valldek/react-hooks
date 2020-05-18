import React, { useState } from 'react';

import Side from './componenets/Side/Side';
import Loader from './componenets/Loader/Loader';
import Logo from './componenets/Logo/Logo';
import Input from './componenets/Input/Input';
import Footer from './componenets/Footer/Footer';

const App = () => {
  // stateName - enything you want
  // setStateName - by convention set and then stateName -> setStateName
  // useState() - one parameter - default value for stateName
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ showPassword, setShowPassowrd] = useState(false);
  const [ resetPassword, setResetPassword] = useState(false);

  const handleLogIn = (evt) => {
    evt.preventDefault();
    console.log(this);
  }

  return (
    <React.Fragment>
      <Side>
        <Loader />
      </Side>
      <Side>
        <Logo />
        <form className="form" action="">
        <Input
          type="email"
          cssClass="form__input"
          placeholder="Email Address"
          label="Email Address: "
          name="login-email"
          value={email}
          onChange={ (evt) => setEmail(evt.target.value)}
        />

        <div
          className="form__field"
          hidden={resetPassword}
        >
          <Input
            type={showPassword ? "text" : "password" }
            cssClass="form__input"
            placeholder="Password"
            label="Password: "
            name="login-password"
            value={password}
            onChange={ (evt) => setPassword(evt.target.value)}
          />

          <div
            className="form__icon form__icon--right"
            onMouseDown={ () => setShowPassowrd(!showPassword) }
            onMouseUp={ () => setShowPassowrd(!showPassword) }
            onMouseLeave={ () => setShowPassowrd(false) }
          >

          { !showPassword ?
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-2-inside-1" >
              <path d="M6.42179 25C8.25869 16.4273 15.8788 10 25 10C34.1212 10 41.7413 16.4273 43.5782 25C41.7413 33.5727 34.1212 40 25 40C15.8788 40 8.25869 33.5727 6.42179 25Z"/>
              </mask>
              <path d="M6.42179 25L4.46618 24.581L4.37639 25L4.46618 25.419L6.42179 25ZM43.5782 25L45.5338 25.419L45.6236 25L45.5338 24.581L43.5782 25ZM8.3774 25.419C10.0208 17.7493 16.8413 12 25 12V8C14.9162 8 6.49657 15.1053 4.46618 24.581L8.3774 25.419ZM25 12C33.1587 12 39.9792 17.7493 41.6226 25.419L45.5338 24.581C43.5034 15.1053 35.0838 8 25 8V12ZM41.6226 24.581C39.9792 32.2507 33.1587 38 25 38V42C35.0838 42 43.5034 34.8947 45.5338 25.419L41.6226 24.581ZM25 38C16.8413 38 10.0208 32.2507 8.3774 24.581L4.46618 25.419C6.49657 34.8947 14.9162 42 25 42V38Z" mask="url(#path-2-inside-1)"/>
              <path d="M20 23C21.6569 23 23 21.6569 23 20C23 19.7823 22.9768 19.5701 22.9328 19.3656C23.5773 19.1291 24.2735 19 25 19C28.3137 19 31 21.6863 31 25C31 28.3137 28.3137 31 25 31C21.6863 31 19 28.3137 19 25C19 24.2735 19.1291 23.5773 19.3656 22.9328C19.5701 22.9768 19.7823 23 20 23Z" />
            </svg>
            :
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.7642 19.6733C26.937 19.2431 25.9969 19 25 19C24.2735 19 23.5773 19.1291 22.9328 19.3656C22.9768 19.5701 23 19.7823 23 20C23 21.6569 21.6569 23 20 23C19.7823 23 19.5701 22.9768 19.3656 22.9328C19.1291 23.5773 19 24.2735 19 25C19 25.9969 19.2431 26.937 19.6733 27.7642L27.7642 19.6733ZM24.4042 30.9708C24.6002 30.9901 24.7989 31 25 31C28.3137 31 31 28.3137 31 25C31 24.7989 30.9901 24.6002 30.9708 24.4042L24.4042 30.9708Z" />
              <path d="M34.749 12.6885C31.8988 10.9813 28.564 10 25 10C15.8788 10 8.25869 16.4273 6.42179 25C7.27573 28.9853 9.37947 32.5069 12.3028 35.1347L13.7192 33.7183C11.1657 31.452 9.29928 28.4287 8.47278 25C10.2708 17.5409 16.9906 12 25 12C28.0077 12 30.8336 12.7814 33.2852 14.1523L34.749 12.6885ZM18.6149 36.7601C20.5865 37.5596 22.742 38 25 38C33.0094 38 39.7291 32.4591 41.5272 25C40.8613 22.2376 39.5204 19.7383 37.689 17.686L39.105 16.27C41.2949 18.6949 42.8684 21.6873 43.5782 25C41.7413 33.5727 34.1212 40 25 40C22.1785 40 19.5007 39.385 17.0932 38.2818L18.6149 36.7601Z" />
              <line x1="10.7329" y1="40.7329" x2="40.7329" y2="10.7329" stroke-width="2"/>
            </svg>
          }
          </div>
        </div>
        <div className="form__controls">
          <button
            className="form__button"
            type="submit"
            onClick = { (evt) => handleLogIn(evt) }
            >
              {resetPassword ? 'Reset' : 'Log in' }
          </button>
          <a
            className="form__link" href="#"
            onClick={ () => setResetPassword(!resetPassword) }
          >
            {
              resetPassword ? 'Cancel' : 'Forgot Password?'
            }
          </a>
        </div>
      </form>
        <Footer />
      </Side>
      <Side>
        <Logo />
        <Footer />
      </Side>
    </React.Fragment>
  );
}

export default App;
