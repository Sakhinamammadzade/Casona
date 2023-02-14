import React from 'react';
import Banner from '../../components/Banner/Banner';
import phone from './logo.png';
import email from './email.png';
import location from './location.png';
import ContactItem from './components/ContactItem';
import './contact.scss';
import {Contactboxes} from './components/Contactbox';

function Contact() {
  return (
    <div>
      <Banner
        title='Contact'
        coverPhoto='https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg'
        pageName='Contact'
        sliderExist={false} />
      <div className='threedivs'>
      <Contactboxes photo={phone} title='Phone' description='Call us: 0333 015 0000' />
      <Contactboxes photo={location} title='Live chat' description='Click here to launch live chat' />
      <Contactboxes photo={email} title='Email' description='Email us at: contact@familab.net' />
      </div>
      <ContactItem />
    </div>
  );
}

export default Contact;
