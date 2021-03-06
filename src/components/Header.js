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
          <h3>{strings.site.home}</h3>
        </NavLink>
        <div className="header__title" to="/contacto">
          <h3>{strings.site.welcome} {props.userEmail}</h3>
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
          <h3>{strings.site.home.toUpperCase()}</h3>
        </NavLink>
        <NavLink className="header__title" to="/articulos">
          <h3>{strings.site.articles.toUpperCase()}</h3>
        </NavLink>
        <NavLink className="header__title" to="/contacto">
          <h3>{strings.site.contactUs.toUpperCase()}</h3>
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
