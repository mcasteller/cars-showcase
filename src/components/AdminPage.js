import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Toggle from './base/Toggle';
import strings from '../resources/strings';
import { startMeliSynchronize, removeMeliSynchronize } from '../actions/users';
import { auth } from 'firebase/app';

 class AdminPage extends React.Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      authURL : '',
      enableMeliSync : props.user ? props.user.meli.enableMeliSync : false
    }
  }
  
  componentDidMount() {
    this._isMounted = true;
    const self = this;

    axios.get('/api/meli/getAuthURL')
    .then(function (response) {
      if (!self._isMounted) return; // Protection
      self.setState(() => ({authURL : response.data}));
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleUserAuthorization = async (isChecked) => {
    if (isChecked) {
      this.props.startMeliSynchronize(this.state.authURL);
     //window.location = this.state.authURL;
     // window.open(this.state.authURL, "Google", "width=500,height=500");
    } else {
      this.props.removeMeliSynchronize();
    }
  }

  render() {
    return (
  
      <div className="page-body content-container">
        <h1>{strings.site.manage}</h1>
        <h2>{strings.site.vehicles}</h2>
        <Link to="/admin/vehiculos/create">
          <h2>{strings.site.vehicle.addVehicles}</h2>
        </Link>
        <Link to="/admin/vehiculos/edit">
          <h2>{strings.site.vehicle.editVehicles}</h2>
        </Link>
        <h2>{strings.site.meli.sync}</h2>
        <Link to={this.state.authURL}>
        </Link>
        <Toggle isChecked={this.state.enableMeliSync} onChange={this.handleUserAuthorization}/>
        <h2>{strings.site.articles}</h2>
        <Link to="/admin/articulos/create">
          <h2>{strings.site.article.addArticle}</h2>
        </Link>
        <Link to="/admin/articulos/edit">
          <h2>{strings.site.article.editArticle}</h2>
        </Link>
      </div>
    );
  }
} 

// Make dispatch functions to be available on props 
const mapDispatchToProps = (dispatch) => ({
  startMeliSynchronize: (authURL) => dispatch(startMeliSynchronize(authURL)),
  removeMeliSynchronize: () => dispatch(removeMeliSynchronize())
});

const mapStateToProps = (state, props) => ({
  user: state.users ? state.users[0] : ''
});

// Call higher order component with our component as function call parameter
// Also pass two params to connect component
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);