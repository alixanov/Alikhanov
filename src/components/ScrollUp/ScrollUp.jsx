import React, { useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".scrollup");
      // when the scroll im heigher then 560 viewport height,add the show-scroll classto a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    });
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз после монтирования компонента

  return (
    <div>
      <a href="" className="scrollup">
        <div className="i uil uil-arrow-up scrollup__icon"></div>
      </a>
    </div>
  );
};

export default ScrollUp;
