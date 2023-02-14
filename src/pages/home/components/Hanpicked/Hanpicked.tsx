import './Hanpicked.scss';
import { Link } from 'react-router-dom';
import HanpickedCard from '../HanpickedCard/HanpickedCard';
import React from 'react';
import cardImg1 from '../../../../assets/images/cardImg1.jpg';
import cardImg2 from '../../../../assets/images/cardImg2.jpg';
import cardImg3 from '../../../../assets/images/cardImg3.jpg';

export default function Hanpicked() {
  return (
    <div className="Hanpicked-field">
      <div className="Hanpicked-container">
        <div className="Hanpicked-content">
          <div className="Content-up">
            <p className="Content-title">Hanpicked Collection</p>
            <div className="Divider-wrap"></div>
            <Link to={'/shop'} className="Content-explore">
              EXPLORE ALL
            </Link>
          </div>
          <div className="Content-bottom">
            <div className="Hanpicked-card-up">
              <HanpickedCard imgSrc={cardImg1} flexStyle={'flex-start'} />
              <HanpickedCard imgSrc={cardImg2} flexStyle={'flex-end'} />
            </div>
            <div className="Hanpicked-card-bottom">
              <HanpickedCard imgSrc={cardImg3} flexStyle={'flex-start'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
