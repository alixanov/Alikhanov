import "./Testimonials.css";
import { Data } from "./Data";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="testimonials container section">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50">
        "Мои клиенты говорят"
      </h2>
      <span
        className="section__subtitle"
        data-aos-delay="100"
        data-aos="zoom-in"
      >
        Cвидетельство
      </span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
