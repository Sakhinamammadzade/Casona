import '../about/about.scss';
import Banner from '../../components/Banner/Banner';
import React from 'react';
import GentSac from './components/GentSac/GentSac';
import Handcrafted from './components/Handcrafted/Handcrafted';
import AboutServices from './components/AboutServices/AboutServices';
export default function About() {
  return (
    <>
      <Banner
          title="About" 
          pageName="About"
          coverPhoto="https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg"
          sliderExist={false} />
      <GentSac />
      <Handcrafted />
      <AboutServices />
    </>
  );
}
