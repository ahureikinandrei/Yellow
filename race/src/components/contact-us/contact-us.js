import React from 'react';

import './contact-us.css';
import photo from './My-photo.jpg';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <img src={photo} alt="My photo" className="contact-us__photo" />
            <a href="https://www.linkedin.com/in/andrei-ahureikin/" target="_blank">Andrei Ahureikin</a>
        </div>
    );
};

export default ContactUs;