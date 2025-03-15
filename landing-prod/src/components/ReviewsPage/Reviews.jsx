import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import "./Reviews.css";

const reviewsData = [
  {
    name: "Ирина Ефимова",
    position: "Управляющая сетью ресторанов, Москва",
    review:
      "Кирилл, благодарю за сверх-продуктивную работу. Все понятно разложил по пунктам, наметил дальнейшие шаги!",
  },
  {
    name: "Никита Суховский",
    position: "Бизнесмен, Краснодар",
    review:
      "Несколько лет назад задался целью инвестировать с Кириллом. Очень хочется отметить профессионализм, спасибо за удобный формат консультаций!",
  },
  {
    name: "Дмитрий Серов",
    position: "Финансовый аналитик, Санкт-Петербург",
    review:
      "Кирилл помог мне сориентироваться в инвестициях и создать грамотный план. Теперь я чувствую себя увереннее в своих решениях!",
  },
];

const getInitials = (name) => {
  const words = name.split(" ");
  return words.length >= 2 ? words[0][0] + words[1][0] : words[0][0];
};

const getRandomColor = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFC733",
    "#A133FF",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("reviews");
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
      className={`reviews ${isVisible ? "visible" : "hidden"}`}
      id="reviews"
    >
      <h2>Отзывы</h2>
      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <Card key={index} className="review-card">
            <div className="review-header">
              <Avatar
                style={{ backgroundColor: getRandomColor(), color: "white" }}
                size={64}
              >
                {getInitials(review.name)}
              </Avatar>
              <div>
                <h3>{review.name}</h3>
                <p>{review.position}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
