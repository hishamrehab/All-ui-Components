import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBed, MdArrowOutward } from "react-icons/md";
import { PiVectorThreeThin } from "react-icons/pi";
import { AiOutlineEnvironment } from "react-icons/ai";

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

const CarouselThree: React.FC = () => {
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

  // AliceCarousel settings
  const carouselSettings = {
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1020: { items: 3 },
    },
    autoPlay: true,
    infinite: true,
    autoPlayInterval: 3000, // 3 seconds
    autoPlayDirection: "ltr",
    animationDuration: 1000, // 1 second
    disableDotsControls: false,
    disableButtonsControls: false,
  };

  return (
    <div className="container text-center m-auto content-center">
      <h2 className="text-2xl font-black mb-10">Recently Added</h2>

      <AliceCarousel {...carouselSettings} className="cursor-grab">
        {data.map((card) => (
          <div
            className="flex items-center flex-wrap cursor-grab text-left w-[370px] min-w-[370px]"
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
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default CarouselThree;
