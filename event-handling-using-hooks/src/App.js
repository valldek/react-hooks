import React, { useState } from 'react';

import Side from './componenets/Side/Side';
import Loader from './componenets/Loader/Loader';
import Logo from './componenets/Logo/Logo';
import Form from './componenets/Form/Form';
import Footer from './componenets/Footer/Footer';

const App = () => {

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
