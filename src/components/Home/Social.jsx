import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/alikhanov.13/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://t.me/alikhanov13"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-telegram"></i>
        {/* dribble */}
      </a>
      <a
        href="https://github.com/alixanov"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
