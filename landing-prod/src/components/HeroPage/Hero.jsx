import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Кирилл Дмитриев
          <span
            className="hero-plus"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            +
            {showTooltip && (
              <div className="hero-tooltip">
                <ul>
                  <li>Первый инвестиционный канал в ТОП-1</li>
                  <li>Более 10 лет опыта на рынке</li>
                  <li>В активе у клиентов более 100 млн руб</li>
                  <li>Средняя доходность &gt; 25% годовых</li>
                  <li>Автор курса «Поташов Инвестиции»</li>
                </ul>
              </div>
            )}
          </span>
        </h1>
        <p className="hero-description">
          Зарабатываю на инвестициях и помогу заработать вам
        </p>
        <button className="hero-button">Связаться</button>
      </div>
    </section>
  );
};

export default Hero;
