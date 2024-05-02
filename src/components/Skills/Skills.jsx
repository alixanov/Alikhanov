import React, { useEffect } from "react";
import "./Skills.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import AOS from "aos";


const Skills = () => {
    useEffect(() => {
      AOS.init();
    });
  return (
    <section className="skills section " id="skills">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50">
        Навыки
      </h2>
      <span
        className="section__subtitle"
        data-aos-delay="100"
        data-aos="zoom-in"
      >
        Мой технический уровень
      </span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
