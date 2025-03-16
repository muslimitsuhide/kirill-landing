import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("results");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`results ${isVisible ? "visible" : "hidden"}`}
      id="results"
    >
      <h2>Результаты</h2>
      <div className="top-row">
        {[
          {
            year: "2021",
            deals: "92 сделки",
            profit: "32,3% средний доход",
            investors: "107 инвесторов",
          },
          {
            year: "2022",
            deals: "101 сделка",
            profit: "33,7% средний доход",
            investors: "112 инвесторов",
          },
          {
            year: "2023",
            deals: "104 сделки",
            profit: "27,7% средний доход",
            investors: "115 инвесторов",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`year-block ${isVisible ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="year-header">• {item.year} ГОД •</div>
            <div className="year-stats">
              <p>{item.deals}</p>
              <p>{item.profit}</p>
              <p>{item.investors}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-row">
        <div
          className={`photo-container ${isVisible ? "animate" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/img1.jpg`}
            alt="Игорь Поташов"
          />
        </div>

        <div className="stats-column">
          {[
            { number: "176", text: "Консультаций за 2023 год" },
            { number: "27,7%", text: "Средний доход инвестора" },
            { number: "104", text: "Совершённых сделок" },
            { number: "115", text: "Инвесторов работало со мной" },
          ].map((item, index) => (
            <div
              key={index}
              className={`stat-item ${isVisible ? "animate" : ""}`}
              style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
            >
              <h3>{item.number}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
