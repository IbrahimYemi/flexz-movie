import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
  const Twitter = <FontAwesomeIcon className="highlight" icon={faTwitter} />;
  const Github = <FontAwesomeIcon className="highlight" icon={faGithub} />;
  const Instagram = (
    <FontAwesomeIcon className="highlight" icon={faInstagram} />
  );
  const Linkedin = <FontAwesomeIcon className="highlight" icon={faLinkedin} />;
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/IbrahimYemi" target="blank">
          {Github}
        </a>
        <a href="https://twitter.com/sharafa224" target="blank">
          {Twitter}
        </a>
        <a href="https://instagram.com/sharafa224" target="blank">
          {Instagram}
        </a>
        <a
          href="https://www.linkedin.com/in/ibrahim-sarafadeen-8a11691a7?original_referer="
          target="blank"
        >
          {Linkedin}
        </a>
      </div>
      <div className="hr"></div>
      <div className="copyright">&copy; of Ibrahim Yemi 2022</div>
    </div>
  );
}
