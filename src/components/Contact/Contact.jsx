import "./Contact.css";
import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import AOS from "aos";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Отправить сообщение");
  const [state, handleSubmit] = useForm("mlddolzv");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setButtonText("Сообщение отправлено!");
    }
  }, [state.succeeded]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50"> Связаться </h2>
      <span className="section__subtitle" data-aos-delay="100" data-aos="zoom-in" > Поделитесь своими мыслями </span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Поговори со мной</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"> </i>
              <h3 className="contact__card-title">Почта</h3>
              <span className="contact__card-data"> alixonovshukurullo13@gmail.com </span>
              <br />
              <a href="mailto:alixonovshukurullo13@gmail.com" className="contact__button" > Напиши мне{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>
              <h3 className="contact__card-title">Telegram</h3>
              <br />
              <a href="https://t.me/alikhanov13" className="contact__button"> Напиши мне{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <br />
              <a href="https://www.instagram.com/alikhanov.13/" className="contact__button" > Напиши мне{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>
            <div className="contact__card">
              <div className="contact__phone-card">
                <i className="bx bx-phone contact__button-icon"></i>
              </div>
              <a href="tel:+998940751313" className="contact__button"> +998940751313 <i className="bx bxl-right-arrow-alt contact__button-icon"></i> </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Напишите мне свой проект</h3>
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="name">Имя</label>
              <input id="name" type="text" name="name" className="contact__form-input" placeholder="укажите ваше имя" />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" className="contact__form-input" placeholder="укажите ваш адрес электронной почты" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="message">Проект</label>
              <textarea id="message" name="message" cols="30" rows="10" className="contact__form-input" placeholder="опишите свой проект" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button className="button button--flex" type="submit" disabled={state.submitting}>
              {buttonText}
              <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                {state.succeeded ? (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8l-8 8.5z" fill="var(--container-color)" />
                ) : (
                  <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="var(--container-color)" />
                )}
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
