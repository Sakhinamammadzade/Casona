import './AboutServicesItem.scss';
import React from 'react';
import { BorderRight } from 'react-bootstrap-icons';

interface IProps {
    imgSrc: string;
    title: string;
    border: string;
  }

export default function AboutServicesItem(props: IProps) {
  const { imgSrc, title, border } = props;
  return (
    <div className="Aservices-item" style={{ borderRight: `${border}`}}>
      <div className="Aservices-item-container">
        <div className="Aservices-item-img">
          <img src={imgSrc} alt="Delivery"/>
        </div>
        <div className="Aservices-item-content">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
  
