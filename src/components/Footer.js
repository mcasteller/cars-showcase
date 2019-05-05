import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="content-container">
      <div className="footer__content">
        <h1>Pie de Pagina</h1>
        <Link className="footer__title" to="/login">
          <h1>Login</h1>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;