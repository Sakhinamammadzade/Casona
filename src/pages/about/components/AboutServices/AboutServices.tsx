import './AboutServices.scss';
import React from 'react';
import AboutServicesItem from '../AboutServicesItem/AboutServicesItem';
import Delivery from '../../../../assets/images/Delivery.svg';
import Security from '../../../../assets/images/Security.svg';
import Contact from '../../../../assets/images/Contact.svg';
export default function AboutServices() {
    return (
      <div className="Aservices-field">
        <div className="Aservices-container">
          <div className="Aservices-title">
            <span>Reasons to shop with us</span>
          </div>
          <div className="Aservices-items">
            <AboutServicesItem
                imgSrc={Delivery}
                title='Fast national & international delivery'
                border='1px solid #FFFFFF75'
            />
            <AboutServicesItem
                imgSrc={Security}
                title='Secure Checkout our partners'
                border='1px solid #FFFFFF75'
            />
            <AboutServicesItem
                imgSrc={Contact}
                title='Fast and free Customer support'
                border='0px'
            />
          </div>
        </div>
      </div>
    );
  }
