import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../resources/strings';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">{strings.site.goHome}</Link>
  </div>
);

export default NotFoundPage;
