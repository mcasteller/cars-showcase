import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../resources/strings';

const Footer = () => (
  <footer className="footer">
    <div className="content-container">
      <Link className="footer__title" to="/login">
        <h3>{strings.site.login}</h3>
      </Link>
    </div>
  </footer>
);

export default Footer;