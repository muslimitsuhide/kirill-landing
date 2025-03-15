import React from "react";
import "./Cases.css";

const casesData = [
  {
    id: 1,
    title: "ЗАЙМ ПОД ЗАЛОГ",
    subtitle: "КЕЙС 1",
    details: [
      "Локация: Краснодарский край, г. Сочи",
      "Рыночная стоимость: 7.717.500 руб",
      "Сумма инвестиций: 3.150.000 руб",
      "Срок договора: 12 мес",
    ],
    income: "= 49,5% ГОДОВЫХ",
    image:
      "https://static.tildacdn.com/tild6639-6265-4939-a639-303965663065/Rectangle_50_2.jpg",
  },
  {
    id: 2,
    title: "СРОЧНЫЙ ВЫКУП НЕДВИЖИМОСТИ",
    subtitle: "КЕЙС 2",
    details: [
      "Локация: г. Москва, Ленинградский проспект",
      "Рыночная стоимость: 15.000.000 руб",
      "Сумма выкупа: 12.750.000 руб",
      "Сумма инвестиций: 1.000.000 руб",
      "Срок договора: 12 мес",
    ],
    income: "= 90% ГОДОВЫХ",
    image:
      "https://static.tildacdn.com/tild6138-6534-4631-b739-633435336135/Rectangle_51_2.jpg",
  },
  {
    id: 3,
    title: "НОВОСТРОЙКИ",
    subtitle: "КЕЙС 3",
    details: [
      "Цена квартиры: 8.228.380 руб",
      "Первоначальный взнос: 27%",
      "Кредит: 6.020.000 руб",
      "Ставка: 10.8%",
      "Продажа квартиры: 14.400.000 руб",
      "Инвестиции: 4.286.406 руб",
      "Прибыль: 4.401.105 руб",
      "Срок - 2,5 года",
    ],
    income: "= 33% ГОДОВЫХ",
    image:
      "https://thumb.tildacdn.com/tild3066-3337-4630-a664-633133376334/-/format/webp/Rectangle_52_1.jpg.webp",
  },
];

const Cases = () => {
  return (
    <section className="cases" id="cases">
      <h2>Кейсы</h2>
      <div className="cases-grid">
        {casesData.map((item, index) => (
          <div
            key={item.id}
            className={`case-container ${index % 2 === 0 ? "row-reverse" : ""}`}
          >
            <div className="case-text">
              <span className="case-subtitle">• {item.subtitle} •</span>
              <h3>{item.title}</h3>
              <ul>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="case-income">{item.income}</div>
            </div>
            <div className="case-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;
