import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ALIKHANOV</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Обо мне
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Портфолио
            </a>
          </li>

          <li>
            <a href="https://github.com/alixanov" className="footer__link">
              Проект
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/alikhanov.13/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://t.me/alikhanov13"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href="https://github.com/alixanov"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.pinterest.fr/alikhanov13/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-pinterest"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; ALIKHANOV. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
