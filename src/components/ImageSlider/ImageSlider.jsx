import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const sliderImages = [
    { imgUrl: "/images/1.jpg" },
    { imgUrl: "/images/2.jpg" },
    { imgUrl: "/images/3.jpg" },
    { imgUrl: "/images/4.jpg" },
    { imgUrl: "/images/5.jpg" },
];

const ImageSlider = () => {
  return (
    <div className="sponsor-section bg-gray-900 py-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={2} // Always show 2 slides
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {sliderImages.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-item mx-2">
                    <div className="sponsor-thumb bg-white p-4 rounded-md shadow-lg">
                      <img src={val.imgUrl} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

