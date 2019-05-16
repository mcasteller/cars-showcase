import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import strings from '../resources/strings'

export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/">
          <h2>{strings.site.home}</h2>
        </NavLink>
        <NavLink className="header__title" to="/contacto">
          <h2>{strings.site.contactUs}</h2>
        </NavLink>
        <button className="button button--link" onClick={props.startLogout}>{strings.site.logout}</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
