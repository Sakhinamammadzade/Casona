import './HanpickedCard.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface IProps {
  imgSrc: string;
  flexStyle: string;
}

export default function HanpickedCard(props: IProps) {
  const { imgSrc, flexStyle } = props;
  return (
    <div className="Hanpicked-card" style={{ justifyContent: `${flexStyle}` }}>
      <div className="Card-img">
        <Link to={'/shop'}>
          <img src={imgSrc} alt="CardImg" />
        </Link>
      </div>
      <div className="Card-content">
        <p className="Card-title">Dreaming of Oacay</p>
        <p className="Card-daily">DAILY ESSENTIALS</p>
        <Link to={'/shop'}>
          <span>Explore all</span>
        </Link>
      </div>
    </div>
  );
}
