import './HomeServicesItem.scss';
import React from 'react';

interface IProps {
  imgSrc: string;
  title1: string;
  title2: string;
}

export default function HomeServicesItem(props: IProps) {
  const { imgSrc, title1, title2 } = props;
  return (
    <div className="Services-item">
      <div className="ServicesItem-img">
        <img src={imgSrc} alt="Rocket" />
      </div>
      <div className="ServicesItem-content">
        <p className="SI-title">{title1}</p>
        <p className="SI-title2">{title2}</p>
      </div>
    </div>
  );
}
