import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section " id="services">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50">
        Услуги
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Что такое предложение
      </span>

      <div className="services__container container grid">
        
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Front-end <br /> Back-end
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Читать далее
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Визуальный Дизайнер</h3>
              <p className="services__modal-description">
                Мы работаем настойчиво, чтобы вы почувствовали уверенность и
                высокий стандарт качества в наших услугах.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Разработка full-stack приложений с акцентом на эстетику и
                    производительность.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Создание веб-приложений с front-end и back-end.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Элегантная интеграция front-end и back-end для вашего
                    проекта.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Продуманное сочетание front-end и back-end для создания
                    впечатляющих веб-приложений.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Создание веб-проектов с безупречным дизайном и
                    функциональностью на всех уровнях.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br />
              Дизайнер
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Читать далее
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Дизайнер</h3>
              <p className="services__modal-description">
                Cоздавать впечатляющие и интуитивно понятные пользовательские
                интерфейсы, которые вдохновляют, удивляют и облегчают жизнь
                наших пользователей. Мы стремимся к совершенству в каждой
                детали, чтобы каждый пользователь нашего продукта чувствовал
                себя ценным и уверенным в его использовании.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Индивидуальный дизайн пользовательского интерфейса,
                    соответствующий вашему бренду.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Создание привлекательных макетов и дизайна для продукции и
                    услуг компаний.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Дизайн интерфейса, который повышает конверсию и
                    удовлетворенность клиентов<div className=""></div>
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Построение креативного и легкого в использовании
                    пользовательского интерфейса для вашего продукта или услуги.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Пользовательский интерфейс, который захватывает внимание и
                    оставляет впечатление.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-robot services__icon"></i>
            <h3 className="services__title">
              Telegram <br /> ботов
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Читать далее
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Telegram ботов</h3>
              <p className="services__modal-description">
                Наши страсти воплощаются в инновационных решениях для создания
                Telegram-ботов, которые вдохновляют, привлекают и удивляют наших
                клиентов, делая их опыт неповторимым.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Разработка умного и интуитивно понятного Telegram-бота.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Индивидуальные Telegram-боты: Подстроенные под ваши
                    потребности.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Создание персонализированного бота для Telegram с высокой
                    функциональностью.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Боты для Telegram, которые делают вашу жизнь проще и ваш
                    бизнес более успешным.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Продвинутые Telegram-боты: Новый уровень коммуникации и
                    автоматизации.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
