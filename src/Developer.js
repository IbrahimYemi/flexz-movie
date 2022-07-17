import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-brands-svg-icons';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Developer() {
  const Envelope = <i className="fa fa-envelope"></i>;
  return (
    <div className="developer">
      <h2>DEVELOPER</h2>
      <div className="about-me">
        <div className="aboutme-image">
          <img
            src="https://raw.githubusercontent.com/IbrahimYemi/DeanYemi134/main/IMG-20220622-WA0002.jpg"
            alt=""
          />
          <p className="about-developer">
            Hi there, I am Yemi, a Nigeria based web developer, with over two
            years of experience with profound knowledge of solving problems,
            creative and dedication to building, maintaining, and optimizing the
            performance of user-centric, high impact website for brand and
            companies
          </p>
          <a
            className="hire-me-text"
            href="mailto:ibrahimsharafadeen95@gmail.com?Subject=HELLO YEMI,"
            target="blank"
          >
            {Envelope} Hire Me
          </a>
        </div>
        <div className="about-app">
          This react application is created using create react app on the
          stackblitz platform, my system is not powerful enough to run the
          install node npm so i use stackblitz as an alternative for my
          projects.
          <br />
          This application is getting its movie details from the movieDB API
          where i made use of the movie poster, release date, title, rating, and
          the general overview of the movie. I use react state to set the front
          page display image and use the useEffect function to manage my side
          effect.
          <br />
          The rating is set to color red for any value that is below 7 and
          orange for all the values above or equal to 7. Get in touch with me
          and lets work together! I am open for job oppurtunities and
          reommendation, thanks.
        </div>
      </div>
    </div>
  );
}
