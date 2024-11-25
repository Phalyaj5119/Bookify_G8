import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './Banner.css';

import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">

            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
     </Swiper>
    </div>
  )
}

export default BannerCard