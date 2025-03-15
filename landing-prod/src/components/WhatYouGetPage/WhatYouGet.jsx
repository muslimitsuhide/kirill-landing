import React, { useEffect, useState } from "react";
import "./WhatYouGet.css";

const WhatYouGet = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("what-you-get");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleCards([0, 1, 2, 3]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="what-you-get" id="what-you-get">
      <h2>Что вам даст работа с Кириллом Дмитриевым?</h2>
      <div className="cards-container">
        {[
          {
            img: "../../../public/images/icon1.svg",
            title: "Финансовый план",
            text: "Вы достигнете своих бизнес-целей благодаря эффективному финансовому плану",
          },
          {
            img: "../../../public/images/icon2.svg",
            title: "Доходный портфель",
            text: "Мы вместе разработаем оптимальную стратегию диверсификации ваших активов",
          },
          {
            img: "../../../public/images/icon3.svg",
            title: "Обучение",
            text: "Разберём инструменты инвестирования, научу контролировать эмоции и риски",
          },
          {
            img: "/images/icon4.svg",
            title: "Защита жизни и капитала",
            text: "Подберём надёжные инструменты страхования и сохранения капитала",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`card ${
              visibleCards.includes(index) ? "visible" : "hidden"
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGet;
