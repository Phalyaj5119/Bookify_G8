import React from 'react';
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import PromoBanner from '../home/PromoBanner';
import OtherBooks from '../home/OtherBooks';
import Review from '../home/Review';

const Home = () => {
  return (
   <div>
    <Banner/>
    <BestSellerBooks/>
    <FavBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
   </div>
  )
}

export default Home