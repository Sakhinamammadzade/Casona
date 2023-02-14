import './DailyEssentials.scss';
import DailyEssentialsItem from '../DailyEssentialsItem/DailyEssentialsItem';
import React from 'react';
import dailyImg1 from '../../../../assets/images/daily1.jpg';
import dailyImg2 from '../../../../assets/images/daily2.jpg';

function DailyEssentials() {
  return (
    <div className="DailyEssentialsField">
      <div className="DailyEssentialsContainer">
        <div className="DailyEssentialsItems">
          <DailyEssentialsItem imgSrc={dailyImg1} productName={'Backpacks'} />
          <DailyEssentialsItem imgSrc={dailyImg2} productName={'Sneakers'} />
        </div>
      </div>
    </div>
  );
}

export default DailyEssentials;
