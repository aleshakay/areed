import React from 'react';
import ContactInfo from '../../shared/ContactInfo/ContactInfo';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <ContactInfo />
      </div>
    );
  }
}

export default Contact;
