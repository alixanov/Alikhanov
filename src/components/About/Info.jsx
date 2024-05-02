import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Опыт</h3>
        <span className="about__subtitle">1 год работы</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon "></i>
        <h3 className="about__title">Завершенный</h3>
        <span className="about__subtitle">5+ проектов</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Поддержка</h3>
        <span className="about__subtitle">Онлайн 24/7</span>
      </div>
    </div>
  );
};

export default Info;
