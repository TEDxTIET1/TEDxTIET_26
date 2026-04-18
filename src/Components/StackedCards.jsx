import React from 'react';
import './StackedCards.css';

const cardData = [
  {
    number: "01",
    title: "TED",
    description: "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change.",
    variant: "red"
  },
  {
    number: "02",
    title: "TEDx",
    description: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.",
    variant: "dark"
  },
  {
    number: "03",
    title: "TEDxTIET",
    description: "TEDxTIET is an independently organized TED event driven by TIET students, bringing together innovators and changemakers.",
    variant: "white"
  }
];

const StackedCards = () => {
  return (
    <section className="stacked-section" id="aboutus">
      <div className="stacked-wrapper">
        <div className="stacked-cards-container">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`stacked-card card-${card.variant}`}
              style={{ zIndex: 10 + index }}
            >
              <div className="card-content">
                <h2 className="card-title">
                  <span>{card.number}</span> {card.title}
                </h2>
                <p className="card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackedCards;