import React, { useEffect } from "react";
import "./Portfolio.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Импорты изображений
import project0 from "../../assets/project-0.png";
import tempwise from "../../assets/tempwise.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";


const Portfolio = () => {
  const slider = [
    {
      id: 1,
      projectPortfolio: project0,
      namePortfolio: "Оптимизация магазина",
      descriptionPortfolio: "Логин: admin, Пароль: admin. Логин продавца: user, Пароль: user.",
      linkPortfolio: "https://i-oziq-ovqat-frontend.vercel.app/",
    },
    {
      id: 2,
      projectPortfolio: tempwise,
      namePortfolio: "Temp Wise",
      descriptionPortfolio: "Актуальная информация о погоде в городах.",
      linkPortfolio: "https://tempwise.netlify.app/",
    },
    {
      id: 3,
      projectPortfolio: project1,
      namePortfolio: "NFT Marketplace",
      descriptionPortfolio: "Коллекционируйте редкие цифровые произведения искусства.",
      linkPortfolio: "https://nft-marketplace-digital-collectibles.netlify.app/",
    },
    {
      id: 4,
      projectPortfolio: project2,
      namePortfolio: "Школа будущего",
      descriptionPortfolio: "Образование встречает инновации. Креативность, технологии и знания.",
      linkPortfolio: "https://school-future.netlify.app/",
    },
    {
      id: 5,
      projectPortfolio: project7,
      namePortfolio: "Magazin",
      descriptionPortfolio: "Онлайн-магазин электроники: смартфоны, ноутбуки, аксессуары.",
      linkPortfolio: "https://newshop-roan.vercel.app/",
    },
    {
      id: 6,
      projectPortfolio: project8,
      namePortfolio: "13Dokon",
      descriptionPortfolio: "Продажа уникальных игрушек с удобным интерфейсом и быстрой доставкой.",
      linkPortfolio: "https://www.13dokon.uz/",
    },
    {
      id: 7,
      projectPortfolio: project9,
      namePortfolio: "Otello",
      descriptionPortfolio: "Otello - простой и удобный сервис для бронирования отелей, предоставляющий гибкие возможности поиска и выбора.",
      linkPortfolio: "https://otello.vercel.app/",
    }

  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="portfolio section portfolio-container" id="portfolio">
      <div className="title-portfolio">
        <h2 data-aos="zoom-in" data-aos-delay="50" className="section__title">
          Портфолио
        </h2>
        <span data-aos="zoom-in" data-aos-delay="100" className="section__subtitle">
          Самая последняя работа
        </span>
      </div>

      <Swiper
        className="portfolio__container"
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        breakpoints={{
          400: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 },
        }}
      >
        {slider.map(({ id, linkPortfolio, projectPortfolio, namePortfolio, descriptionPortfolio }) => (
          <SwiperSlide className="portfolio__card" key={id}>
            <img src={projectPortfolio} alt={namePortfolio} className="portfolio__img" />
            <div className="text-portfolio">
              <h3>{namePortfolio}</h3>
              <p>{descriptionPortfolio}</p>
              <a href={linkPortfolio} className="contact__button" target="_blank" rel="noopener noreferrer">
                Посмотреть <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
