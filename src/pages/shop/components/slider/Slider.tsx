// import React, { useRef, useState } from "react";
import './slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

export default function Slider() {
  return (
    <div id="Slider">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          // when window width is >= 575px
          0: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          // when window width is >= 1024px
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        loop={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={img5} alt="" />
            <h6>Accessories</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={img2} alt="" />
            <h6>Backpacks</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={img3} alt="" />
            <h6>Digitals</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={img4} alt="" />
            <h6>Wallets</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={img5} alt="" />
            <h6>Watches</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={img6} alt="" />
            <h6>Water Bottles</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
