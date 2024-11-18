import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card-wrapper">
        <img
          src={process.env.PUBLIC_URL + props.src}
          alt="Placeholder"
          className="card-image"
        />
        <h2 className="card-title">{props.card_title}</h2>
        <div className="card-content">
          <p>Цена</p>
          <p className="card-text">{props.desc}</p>
        </div>
        <button
          className="card-button"
          onClick={() => console.log("в корзину")}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
