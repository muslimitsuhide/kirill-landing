import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import "./FAQ.css";

const { Panel } = Collapse;

const faqData = [
  {
    question:
      "Я боюсь начать инвестировать в новые инвестиционные проекты, что делать?",
    answer:
      "Не нужно бояться, нужно пробовать! Несомненно, в инвестировании существуют определенные риски, но когда с вами рядом будет опытный наставник, вы научитесь лучше понимать куда можно вложить свои средства с минимальным риском.",
  },
  {
    question:
      "Я считаю, не смогу заработать пассивно на инвестировании, как быть ?",
    answer:
      "Встретиться online со мной! Мы рассмотрим наиболее подходящие для вас варианты, которые принесут пассивный доход.",
  },
  {
    question: "Вкладывать деньги придется надолго, а я не хочу ждать",
    answer:
      "Миф о долгосрочных вложениях на десятилетия прочно закрепился в сознании начинающих инвесторов. Вы можете получать доход ежемесячно вложив деньги на 1-3 года.",
  },
  {
    question: "Какая минимальная сумма необходима для инвестирования?",
    answer:
      "Для начала инвестирования не потребуется существенной суммы денег. Как известно, наибольший вклад в приумножение капитала за фактором времени, а не изначальной суммы. Начать инвестировать можно и с 500 рублей, но для личной работы со мной эффективно для вас будет прийти с капиталом от 10 млн руб, т.к. вам будет доступно большее кол-во инструментов для инвестирования, следовательно я смогу для вас сделать более диверсифицированный инвестиционный портфель.",
  },
  {
    question: "Что если не получится сделать результат?",
    answer:
      "Перед началом инвестирования я с вами провожу первичную консультацию, на которой я определяю ваши активы и ваш инвестиционный потенциал. Далее мы заключим договор на 1 год с гарантией результата, за это время вы успеете освоить минимум 1 инструмент, который будет стабильно приносить пассивный доход. По моему опыту, ученики, в зависимости от уровня капитала, за год успевают сделать 3 и более сделки с доходом от 15% годовых.",
  },
  {
    question: "Возможно ли инвестировать, если я не живу в Москве?",
    answer:
      "Более 50% инвесторов, с которыми я работаю, живут в других регионах России и даже в других странах. Современные технологии позволяют заключать удаленно сделки и зарабатывать на них.",
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq");
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
    <section className={`faq ${isVisible ? "visible" : "hidden"}`} id="faq">
      <h2>Вопросы</h2>
      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => (
          <span className={`faq-icon ${isActive ? "active" : ""}`}>
            {isActive ? <CloseOutlined /> : <PlusOutlined />}
          </span>
        )}
        className="faq-collapse"
      >
        {faqData.map((item, index) => (
          <Panel
            header={<span className="faq-question">{item.question}</span>}
            key={index}
            className="faq-panel"
          >
            <p className="faq-answer">{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </section>
  );
};

export default FAQ;
