import React, { useEffect } from "react";
import "./Portfolio.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Portfolio = () => {
  const slider = [
    {

      id: 0,
      projectPortfolio: require("../../assets/project-0.png"),
      namePortfolio: "Оптимизация магазина",
      descriptionPortfolio:
        "для админа Логин: Admin - Пароль: Admin. ",
      linkPortfolio: "https://i-oziq-ovqat-frontend.vercel.app/",
    },
    {

      id: 3,
      projectPortfolio: require("../../assets/tempwise.png"),
      namePortfolio: "Temp Wise",
      descriptionPortfolio:
        "Проект представляет собой веб-сайт, который предоставляет пользователям актуальную информацию о погоде в различных городах. ",
      linkPortfolio: "https://tempwise.netlify.app/",
    },
    {

      id: 4,
      projectPortfolio: require("../../assets/project1.png"),
      namePortfolio: "NFT Marketplace",
      descriptionPortfolio:
        "NFT Marketplace - коллекционируйте редкие цифровые произведения искусства. Уникальные и неповторимые цифровые артефакты ждут вас здесь.",
      linkPortfolio: "https://nft-marketplace-digital-collectibles.netlify.app/",
    },
    {
      id: 5,
      projectPortfolio: require("../../assets/project2.png"),

      namePortfolio: "Школа будущего",
      descriptionPortfolio:
        "Школа будущего — место, где образование встречает инновации. Мы развиваем в учениках креативность, критическое мышление и технологическую грамотность для успешного будущего.",
      linkPortfolio: "https://school-future.netlify.app/",
    }


    {
      id: 7,
      projectPortfolio: require("../../assets/project7.png"),
      namePortfolio: "Magazin",
      descriptionPortfolio:
        "Magazin - это онлайн-магазин электроники,для продажа смартфоны, ноутбуки, телевизоры, аудиотехнику и аксессуары " ,
      linkPortfolio: "https://newshop-roan.vercel.app/",
    },
    {
      id: 7,
      projectPortfolio: require("../../assets/project8.png"),
      namePortfolio: "13Dokon",
      descriptionPortfolio:
        "13Dokon - это онлайн-магазин, специализирующийся на продаже уникальных и качественных игрушек. Наш сайт предлагает широкий выбор ручных и заводских игрушек для детей любого возраста. Удобный интерфейс, безопасная оплата и быстрая доставка делают процесс покупок комфортным и приятным.",
      linkPortfolio: "https://www.13dokon.uz/"
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
        <span
          data-aos-delay="100"
          data-aos="zoom-in"
          className="section__subtitle"
        >
          Cамая последняя работа
        </span>
      </div>
      <Swiper
        className="portfolio__container"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map(
          ({
            id,
            linkPortfolio,
            projectPortfolio,
            namePortfolio,
            descriptionPortfolio,
          }) => {
            return (
              <SwiperSlide
                className="portfolio__card"
                key={id}
                style={{ width: "200px" }}
              >
                <img src={projectPortfolio} alt="" className="portfolio__img" />
                <div className="text-portfolio">
                  <h3 >{namePortfolio}</h3>
                  <p >
                    {descriptionPortfolio}
                  </p>
                  <a
                    href={linkPortfolio}
                    className="contact__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Посмотреть
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Portfolio;
