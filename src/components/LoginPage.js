import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import strings from '../resources/strings';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">{strings.site.name}</h1>
      <button className="button" onClick={startLogin}>{strings.site.loginGoogle}</button>
    </div>
  </div>
);

// Pass the redux dispatcher to component 
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
