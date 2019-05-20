import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import strings from '../resources/strings'

export const Header = (props) => {
  if (props.userEmail) {
    return <UserMenu 
              userEmail={props.userEmail}
              startLogout={props.startLogout}
            />
  } 
  return <Menu />  
}

const UserMenu = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/admin">
          <h2>{strings.site.home}</h2>
        </NavLink>
        <div className="header__title" to="/contacto">
          <h2>{strings.site.welcome} {props.userEmail}</h2>
          <button className="button button--link" onClick={props.startLogout}>{strings.site.logout}</button>          
        </div>
      </div>
    </div>
  </header>
);

const Menu = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/">
          <h2>{strings.site.home}</h2>
        </NavLink>
        <NavLink className="header__title" to="/contacto">
          <h2>{strings.site.contactUs}</h2>
        </NavLink>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state, props) => ({
  userEmail: state.auth.userEmail
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
