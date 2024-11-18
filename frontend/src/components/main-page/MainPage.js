import React, { useState } from "react";
import Header from "../header/Header";
import Card from "../card/Card";
import "../style.css";

export default function MainPage() {
  const [cardData] = useState([
    { desc: "Description 1", card_title: "Card Title 1", src: "/mr18.jpg" },
    { desc: "Description 2", card_title: "Card Title 2", src: "/mr18.jpg" },
    { desc: "Description 3", card_title: "Card Title 3", src: "/mr18.jpg" },
    { desc: "Description 4", card_title: "Card Title 4", src: "/mr18.jpg" },
    { desc: "Description 4", card_title: "Card Title 4", src: "/mr18.jpg" },
    { desc: "Description 4", card_title: "Card Title 4", src: "/mr18.jpg" },
  ]);

  const [filteredCards, setFilteredCards] = useState(cardData);

  const handleSearch = (query) => {
    const filtered = cardData.filter((card) =>
      card.card_title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="main-wrapper">
        {/* <div className="main-filters"></div> */}
        <div className="main-card-place">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              desc={card.desc}
              card_title={card.card_title}
              src={card.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
