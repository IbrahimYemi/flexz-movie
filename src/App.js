import React, { useState } from 'react';
import './style.css';
import Frontpage from './Frontpage';
import Card from './Card';
import Developer from './Developer';
import Review from './Review';
import Footers from './Footers';
import Test from './Test';

export default function App() {
  const [bar, setBar] = useState(false);
  function handleBarClick() {
    setBar((prevBar) => !prevBar);
  }

  const Header = (
    <header>
      <h1>Flexz-Movies</h1>
      <nav className={bar ? 'show' : 'none'}>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="icons">
        <h4>
          <u>enjoy-D-thrill</u>
        </h4>
      </div>
    </header>
  );

  return (
    <>
      {Header}
      <Frontpage />
      <Card />
      <Developer />
      <Footers />
    </>
  );
}
