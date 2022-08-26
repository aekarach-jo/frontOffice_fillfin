import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import React, { Fragment } from "react";
import nextConfig from '../../next.config';

const apiUrl = nextConfig.apiPath
export default function Banner({ banner }) {
  const sp = banner.image.split(',')
  SwiperCore.use([Autoplay]);
  return (
    <Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={80}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, color: "white" }}
        allowSlideNext={true}
      >
        {sp?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image width={1096} height={300} src={`${apiUrl}${data}`} alt="image-banner1" />
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}
