import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CarposelOne from "./components/Carousel/CarposelOne";
import CarouselTwo from "./components/Carousel/CarouselTwo";
import CarouselThree from "./components/Carousel/CarouselThree";
import SwiperSliderCarousel from "./components/Carousel/SwiperSliderCarousel";
const App = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="w-[60%] m-auto pt-11">
      <Navbar />
      <CarposelOne />
      <CarouselTwo slides={slides} />
      <CarouselThree />
      <SwiperSliderCarousel />
    </div>
  );
};

export default App;
