import React from 'react'
import NavBar from '../navbar'
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import Footter from './footter';
import CardBox from './cardbox';
import Solution from './solution';
import Team from '../team';
import Ui from '../ui';


const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen h-72 bg-slate-500" >
      <Swiper
      className=''
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className='block p-6 max-w-sm rounded-lg border border-gray-500 shadow-md'>
          <h1>brief intro</h1>
        </div>
      </SwiperSlide>
        <SwiperSlide>
          <div className='block p-6 max-w-sm rounded-lg border border-gray-500 shadow-md'>
            <h1>what do</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='block p-6 max-w-sm rounded-lg border border-gray-500 shadow-md'>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='block p-6 max-w-sm rounded-lg border border-gray-500 shadow-md'>
          <h1>Lorem ipsum dolor sit.</h1>
          </div>
        </SwiperSlide>

    </Swiper>
      </div>
      <CardBox />
    <div>
    </div>
      <Solution />
    <div>
      <div>
        <Ui />
      </div>
      <div>
        <Team/>
      </div>
      <Footter />
    </div>
    </div>
  )
}

export default Homepage