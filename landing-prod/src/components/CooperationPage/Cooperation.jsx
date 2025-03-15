import React, { useEffect, useState } from "react";
import "./Cooperation.css";

const Cooperation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("cooperation");
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
      className={`cooperation ${isVisible ? "visible" : "hidden"}`}
      id="cooperation"
    >
      <h2>Сотрудничество</h2>
      <div className="coop-container">
        <div className="coop-image">
          <img src="../../../public/images/img3.jpg" alt="Портрет" />
        </div>
        <div className="coop-content">
          {[
            {
              title: "КОНСУЛЬТАЦИЯ",
              text: "Анализируем текущую ситуацию и точки роста человека в финансах и инвестициях. Создаем личный финансовый план.",
              number: "01",
            },
            {
              title: "ДЕЙСТВИЯ",
              text: "Разбираем инструменты инвестирования, формируем стратегию для распределения капитала и действуем.",
              number: "02",
            },
            {
              title: "РЕЗУЛЬТАТ",
              text: "Анализируем полученные результаты, планируем корректировки и внедряем изменения в финансовую стратегию для получения нужного результата.",
              number: "03",
            },
            {
              title: "СОПРОВОЖДЕНИЕ",
              text: "Ответы на вопросы, разбор текущей и возможной стратегии достижения финансовых целей, корректировки и изменения во время реализации личной финансовой стратегии человека.",
              number: "04",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`coop-item ${isVisible ? "animate" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3 className="coop-title">{item.title}</h3>
              <p>{item.text}</p>
              <span className="coop-number">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
