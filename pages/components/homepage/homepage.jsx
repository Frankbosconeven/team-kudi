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
// import Ui from "../ui";

const Homepage = () => {
  return (
    <div className="overflow-y-hidden">
      <NavBar />
      <div className="w-screen h-[70vh] bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/767240/pexels-photo-767240.jpeg?cs=srgb&dl=pexels-airin-party-767240.jpg&fm=jpg')] flex justify-center m-auto ">
        <div className="flex justify-center items-center text-center">
          <h3 class=" text-3xl pr-20 md:pl-0 md:text-4xl  lg:text-6xl font-sans tracking-tight  text-center text-white dark:text-white">
            Farming is the Best Solution to the Worlds Starvation
          </h3>
        </div>
      </div>
      <Solution />
      <div></div>
      <div>
      <CardBox />
        <div>
          {/* <Ui /> */}
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
