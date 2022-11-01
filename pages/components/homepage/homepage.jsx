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
    <div>
      <NavBar />
      <div className="w-screen h-72 bg-slate-200 flex justify-between m-auto ">
        <div className="flex justify-between m-auto ">
          <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Noteworthy technology acquisitions 2021
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
