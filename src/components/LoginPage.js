import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Cars Showcase</h1>
      <p>Login </p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

// Pass the redux dispatcher to component 
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
