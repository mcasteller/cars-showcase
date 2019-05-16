import React from 'react';
import strings from '../resources/strings'

export const ContactUsPage = () => {

  return (
    <div className="page-body content-container">
      <h3>{strings.site.contactUsDetail}</h3>
      <a href={`mailto:${strings.site.email}`}>{strings.site.email}</a>
    </div>
  );
};

export default ContactUsPage