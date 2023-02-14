import './DailyEssentialsItem.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface IProps {
  imgSrc: string;
  productName: string;
}

function DailyEssentialsItem(props: IProps) {
  const { imgSrc, productName } = props;
  return (
    <div className="DailyEssentialsItemField">
      <div className="DailyEssentialsItem">
        <img src={imgSrc} alt="daily1" />
        <div className="DailyEssentialsItem-Content">
          <div className="DailyProduct-Content">
            <p className="DailyProduct-Name">{productName}</p>
            <p className="DailyProduct-Title">Daily Essentials</p>
            <div className="DailyProduct-Explore">
              <Link to={'/shop'}>
                <span>Explore all</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyEssentialsItem;
