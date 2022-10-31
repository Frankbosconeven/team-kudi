import React from 'react'
import Footer from '../homepage/footter'
import NavBar from '../navbar'
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

const AboutUs = () => {
  return (
    <div>
        <NavBar />
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className=''>
          <img src="https://www.collinsdictionary.com/images/thumb/tree_267376982_250.jpg?version=4.0.281" alt="" />
        </div>
      </SwiperSlide>
        <SwiperSlide>
          <div className=''>
            <img src="https://www.collinsdictionary.com/images/thumb/tree_267376982_250.jpg?version=4.0.281" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=''>
            <img src="https://www.collinsdictionary.com/images/thumb/tree_267376982_250.jpg?version=4.0.281" alt="" />` `
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=''>
            <img src="https://www.collinsdictionary.com/images/thumb/tree_267376982_250.jpg?version=4.0.281" alt="" />
          </div>
        </SwiperSlide>

    </Swiper>
        <div>
            <h1>
                About Us
            </h1>
            <p>
            SabTec inc. is an agritec startup which provide plant nurseries, fresh fruits and vegetables <br /> and distributed and export to our target customers.
            </p>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default AboutUs