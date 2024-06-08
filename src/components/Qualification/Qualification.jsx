import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Qualification.css";

const Qualification = () => {
  useEffect(() => {
    AOS.init();
  });
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50">
        Квалификация
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Мое личное путешествие
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Образование
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"> </i>
            Опыт
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Фронтальный разработчик
                </h3>
                <span className="qualification__subtitle">
                  Educational center ALGORITM
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023-2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* comment data*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Веб-разработчик</h3>
                <span className="qualification__subtitle">Smart Brain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
            </div>
            {/* comment data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Мобильная разработка </h3>
                <span className="qualification__subtitle">
                  Наманганский инженерно-строительный институт
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX эксперт</h3>
                <span className="qualification__subtitle">SmartBrain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
            </div>
          </div>
          {/* comment 2 chast*/}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Интерфейс продукта</h3>
                <span className="qualification__subtitle">
                  Копмания Alixanov It-Group
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024 настоящее время
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* comment data 1*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Веб-разработчик</h3>
                <span className="qualification__subtitle">
                  Копмания Alixanov It-Group
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024 настоящее время
                </div>
              </div>
            </div>
            {/* comment data 2*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Мобильная разработка </h3>
                <span className="qualification__subtitle">
                  Копмания ALIKHANOV DEVELOPER
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024 настоящее время
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
