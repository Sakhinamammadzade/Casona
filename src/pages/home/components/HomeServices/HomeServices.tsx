import './HomeServices.scss';
import ArrowCircle from '../../../../assets/images/ArrowCircle.svg';
import HomeServicesItem from '../HomeServicesItem/HomeServicesItem';
import React from 'react';
import Rocket from '../../../../assets/images/Rocket.svg';
import Support from '../../../../assets/images/Support.svg';

export default function HomeServices() {
  return (
    <div className="Services-field">
      <div className="Services-items">
        <HomeServicesItem
          imgSrc={Rocket}
          title1={'Free Shipping'}
          title2={`Free worldwide shipping on all Area order above $100`}
        />
        <HomeServicesItem
          imgSrc={ArrowCircle}
          title1={'7 Days Easy Return'}
          title2={`Product any fault within 07 days for an immediately exchange.`}
        />
        <HomeServicesItem
          imgSrc={Support}
          title1={'24/7 Friendly Support'}
          title2={`Our Support Team Always Ready For You to 7 days a week`}
        />
      </div>
    </div>
  );
}
