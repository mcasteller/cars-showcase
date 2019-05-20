import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import strings from '../resources/strings';

export const LoginPage = () => {

    const [user, setUser] = useState('');
    const [pass, setPassword] = useState('');

	const onSubmit = (e) => {
        e.preventDefault();
        startLogin(user, pass);
        setUser('');
        setPassword('');
    }

	return (
	  <div className="box-layout">
	    <div className="box-layout__box">
	      <h1 className="box-layout__title">{strings.site.name}</h1>
	       <form className="form" onSubmit={onSubmit}>
	        <input
	          type="textarea"
	          placeholder={strings.site.vehicle.trim}
	          autoFocus
	          className="text-input"
          	  onChange={(e) => setUser(e.target.value)}
	        />
	        <input
	          type="text"
	          placeholder={strings.site.vehicle.year}
	          className="text-input"
          	  onChange={(e) => setPassword(e.target.value)}
	        />
	        <div>
	          <button className="button">{strings.site.login}</button>
	        </div>
	      </form>
	    </div>
	  </div>
	);
}

// Pass the redux dispatcher to component 
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
