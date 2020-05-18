import React, { useState } from 'react';

import Side from './componenets/Side/Side';
import Loader from './componenets/Loader/Loader';
import Logo from './componenets/Logo/Logo';
import Form from './componenets/Form/Form';
import Footer from './componenets/Footer/Footer';

const App = () => {
  // stateName - enything you want
  // setStateName - by convention set and then stateName -> setStateName
  // useState() - one parameter - default value for stateName
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword ] = useState('');
  // const [ showPassword, setShowPassowrd] = useState(false);
  // const [ isResetPassword, setIsResetPassword ] = useState(false);
  const [ currentSide, setCurrentSide ] = useState('login');

  return (
    <div className={`container container--${currentSide}`}>
      <Side cssClass="side--logged">
        <Loader />
      </Side>
      <Side cssClass="side--login">
        <Logo />
        <Form
          isResetPassword={false}
          currentSide={currentSide}
          setCurrentSide={setCurrentSide}
        />
        <Footer />
      </Side>
      <Side cssClass="side--reset">
        <Logo />
        <Form
          isResetPassword={true}
          currentSide={currentSide}
          setCurrentSide={setCurrentSide}
        />
        <Footer />
      </Side>
    </div>
  );
}

export default App;
