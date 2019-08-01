import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../resources/strings';
import axios from 'axios';
import Toggle from './base/Toggle';

 class AdminPage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      authURL : ''
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
     window.location = this.state.authURL;
     // window.open(this.state.authURL, "Google", "width=500,height=500");
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
        <Toggle isChecked onChange={this.handleUserAuthorization}/>
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

export default AdminPage;