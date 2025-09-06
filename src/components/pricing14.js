import React from "react";
import "./pricing14.css";

const Pricing14 = () => {
  const dishes = [
    { name: "Cheese Sandwich", image: "/Photos/sadwich.png" },
    { name: "Peri Fries", image: "/Photos/peri_peris.png" },
    { name: "Cold Coffee Shake", image: "/Photos/cold_coffee.png" },
    { name: "Spring Roll", image: "/Photos/spring_roll.png" },
    { name: "Chai", image: "/Photos/chai.png" },
    { name: "Vada Pav", image: "/Photos/vada_pai.png" },
  ];

  return (
    <div className="popular-section">
      <h2 className="popular-heading">Our Popular Dishes</h2>
      <div className="popular-grid">
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.image} alt={dish.name} className="dish-img" />
            <h3 className="dish-title">{dish.name}</h3>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing14;
