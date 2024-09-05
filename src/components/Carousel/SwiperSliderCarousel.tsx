import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import base Swiper styles
import "swiper/css/navigation"; // Import additional module styles
import "swiper/css/pagination";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBed, MdArrowOutward } from "react-icons/md";
import { PiVectorThreeThin } from "react-icons/pi";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Use modular imports

// Define the PropertyData type
interface PropertyData {
  id: string;
  name: string;
  image: string;
  title: string;
  address: string;
  price: number;
  monthly: string;
}

// Define the initial state and the useEffect for fetching data
const SwiperSliderCarousel: React.FC = () => {
  const [data, setData] = useState<PropertyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://sunchase.backend.aait-d.com/api/home");
        const repo = await res.json();
        setData(repo.data.recently_added);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container text-center m-auto content-center">
      <h2 className="text-2xl font-black mb-10">Recently Added</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          1020: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
        className="cursor-grab pb-14 pl-12"
      >
        {data.map((card) => (
          <SwiperSlide
            className="flex items-center flex-wrap cursor-grab text-left w-[370px] min-w-[370px] "
            key={card.id}
          >
            <img
              className="w-[370px] h-[308.55px]"
              src={card.image}
              width={370}
              height={308.55}
              draggable="false"
              alt={card.name}
            />
            <div className="px-6">
              <h3 className="mt-5 text-xl font-normal leading text-primary pb-3">
                {card.title}
              </h3>

              <div className="flex items-center gap-1 justify-start flex-row mb-4">
                <AiOutlineEnvironment className="text-primary h-3 w-3" />
                <span className="text-sm font-normal leading-4 text-colorLocation">
                  {card.address}
                </span>
              </div>

              <div className="flex items-center flex-row gap-6 mb-8">
                <div className="flex gap-1">
                  <FaVectorSquare className="w-3 h-3 text-primary" />
                  <span className="text-sm font-normal leading-4 text-colorLocation">
                    2 bedroom
                  </span>
                </div>

                <div className="flex gap-1">
                  <MdOutlineBed className="w-3 h-3 text-primary" />
                  <span className="text-sm font-normal leading-4 text-colorLocation">
                    2 bedroom
                  </span>
                </div>

                <div className="flex gap-1 items-center">
                  <PiVectorThreeThin className="w-3 h-3 text-primary" />
                  <span className="text-sm font-normal leading-4 text-colorLocation">
                    2 bedroom
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-[308.55px]">
                <div>
                  <h3 className="font-sans text-base leading-4 font-bold text-primary pb-1">
                    {card.price} EGP
                  </h3>

                  <p className="font-sans text-xs font-normal leading-[17px] text-monthlyColor">
                    {card.monthly} Monthly
                  </p>
                </div>

                <MdArrowOutward className="w-[17px] h-[17px] text-primary" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSliderCarousel;
