import React from "react";
import "./features.css";
import image from "../images/images.png";

function Features() {
  const cards = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      image: image,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      image: image,
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      image: image,
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      image: image,
    },
  ];

  return (
    <div className="container">
      <h1>FEATURES</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
