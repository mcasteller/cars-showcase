import React from 'react';
import strings from '../resources/strings'

export const ContactUsPage = () => {

  return (
    <div className="page-body content-container article">
      <div className="article__banner">
        <img className="hero__image"src="images/signature.jpg"/>
      </div>
      <h1>{strings.site.contactUs}</h1>
      <h3>{strings.site.contactUsDetail}</h3>
      <a className="email" href={`mailto:${strings.site.email}`}>{strings.site.email}</a>
    </div>
  );
};

export default ContactUsPage