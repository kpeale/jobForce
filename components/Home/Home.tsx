'use client';

import Hero from './Hero/Hero';
import Category from './Category/Category';
import Features from './Features/Features';
import TopCompany from './TopCompany/TopCompany';
import Info from './Info/Info';
import Price from './Price/Price';
import Review from './Review/Review';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // ✅ this is okay, just CSS

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default; // ✅ move import here
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
      <Features />
      <TopCompany />
      <Info />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
