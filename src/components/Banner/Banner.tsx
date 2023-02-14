import './banner.scss';
// import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import Slider from '../../pages/shop/components/slider/Slider';

interface IElement {
  title: string;
  coverPhoto: string;
  pageName: string;
  sliderExist: boolean;
}
export default function Banner(props: IElement) {
  const { coverPhoto, title, pageName, sliderExist } = props;

  return (
    <section id="Banner" style={{ backgroundImage: `url("${coverPhoto}")` }}>
      <div className="banner-text">
        <h3>{title}</h3>
        <Link to="/">
          <p className="home">
            Home
            <ChevronRight className="right-ico" />
          </p>
        </Link>
        <p className="pagename">{pageName}</p>
      </div>

      {sliderExist ? <Slider /> : <></>}
    </section>
  );
}
