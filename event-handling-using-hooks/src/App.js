import React, { useState } from 'react';

const App = () => {
  // stateName - enything you want
  // setStateName - by convention set and then stateName -> setStateName
  // useState() - one parameter - default value for stateName
  const [ stateName, setStateName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ showPassword, setShowPassowrd] = useState(false);

  return (
    <div className="form">
      <form action="">
        <div className="form__field">
          <input
              className="form__input"
              type="text"
              placeholder="Enter username"
              value={stateName}
              onChange={ (evt) => setStateName(evt.target.value)}
            />
        </div>

        <div className="form__field">
          <input
            className="form__input"
            type={showPassword ? "text" : "password" }
            placeholder="Please provide password"
            value={password}
            onChange={ (evt) => setPassword(evt.target.value)}
          />
          <div
            className="input__show-hide"
            onMouseDown={ () => setShowPassowrd(!showPassword) }
            onMouseUp={ () => setShowPassowrd(!showPassword) }
            onMouseLeave={ () => setShowPassowrd(false) }
          />
        </div>
        <button className="form__button" type="submit">Log in</button>
        <span>Forgot Password? </span>
      </form>
      <div className="form__footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet mollitia error iusto a ab incidunt corrupti deleniti sunt officiis, quod aliquam voluptatem ducimus ipsa nulla cumque consectetur rerum exercitationem?
      </div>
    </div>
  )
}

export default App;
