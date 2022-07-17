import React from 'react';
import { useState } from 'react';

export default function Header(props) {
  const [bar, setBar] = useState(false);
  function handleBarClick() {
    setBar((prevBar) => !prevBar);
  }
  function handleSunClick() {}
  return (
    <header>
      <h1>Flexz-Movies</h1>
      <nav className={bar ? 'show' : 'none'}>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Developer</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="icons">
        <i
          className={!props.darkMode ? 'fa fa-sun' : 'fa fa-moon'}
          onClick={props.toggleDarkMode}
        ></i>
        <i
          className={!bar ? 'fa fa-bars' : 'fa fa-times'}
          onClick={handleBarClick}
        ></i>
      </div>
    </header>
  );
}
