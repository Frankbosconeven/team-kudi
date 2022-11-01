import React from "react";
import NavBar from "../navbar";
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Footter from "./footter";
import CardBox from "./cardbox";
import Solution from "./solution";
import Team from "../team";
import Ui from "../ui";

const Homepage = () => {
  return (
    <div className="overflow-y-hidden">
      <NavBar />
      <div className="w-screen h-72 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1600150806193-cf869bcfee05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')] flex justify-between m-auto ">
        <div className="flex justify-center items-center text-center">
          <h5 class="m-10 text-6xl font-serif tracking-tight text-center text-white dark:text-white">
            Data Driven Lending Opportunity For Farmers
          </h5>
        </div>
      </div>
      <CardBox />
      <div></div>
      <Solution />
      <div>
        <div>
          <Ui />
        </div>
        <div>
          <Team />
        </div>
        <Footter />
      </div>
    </div>
  );
};

export default Homepage;
