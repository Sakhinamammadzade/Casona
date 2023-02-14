import './SaleUp.scss';
import { Link } from 'react-router-dom';
import Bike from '../../../../assets/images/bike.jpg';
import React from 'react';

export default function SaleUp() {
  return (
    <div className="SaleUp-field">
      <div className="SaleUp-img">
        <Link to={'/shop'}>
          <img src={Bike} alt="Bike" />
        </Link>
      </div>
      <div className="SaleUp-content">
        <p className="Content-title">
          End of season clearnce <br /> sale up to 30%
        </p>
        <p className="Content-title2">
          Stock is limited. Order now to avoid <br /> disappointment.
        </p>
        <Link to={'/shop'}>
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
}
