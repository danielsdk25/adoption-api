import React from "react";
import petImage from "../../assets/pets/petImage.png";
import ArrowIcon from "../../assets/icons/arrowCard.svg";
import CrossIcon from "../../assets/icons/crossCard.svg";
import HeartIcon from "../../assets/icons/heartCard.svg";
import "../../style/components/cards/CardsStyle.css";

const Cards = () => {
  const Pleasures =
    // [
    //   {
    //     id: 1,
    //     name: "Natalia",
    //     age: "31 años",
    //     prof: "Desarrollo UI",
    //     pleasures:
    [
      {
        icon: "A",
        name: "Gato",
      },
      {
        icon: "A",
        name: "Alegre",
      },
      {
        icon: "A",
        name: "Disfruto estar en casa",
      },
      {
        icon: "A",
        name: "Aparte",
      },
    ];
  // },
  // {
  //   id: 2,
  //   icon: "",
  //   pleasure: "Gato",
  // },
  // ];

  return (
    <div className="body-group-card">
      <div className="body-person-card">
        <img className="image-person-card" src={petImage} alt="image" />
        <div className="info-person-card">
          <h2 className="typo-text name-person-card">Natalia</h2>
          <h3 className="typo-text info-person-card">
            31 años - Diseñadora UI
          </h3>
        </div>
        <div className="pleasures-person-card">
          {Pleasures.map((pleasure) => {
            return (
              <div key={pleasure.name} className="info-group-card">
                <p className="name-pleasure-card">{pleasure.icon}</p>
                <p className="name-pleasure-card">{pleasure.name}</p>
              </div>
            );
          })}
        </div>
        <div className="button-group-card">
          <button className="cross-icon-card">
            <img src={CrossIcon} alt="" />
          </button>
          <button className="heart-icon-card">
            <img src={HeartIcon} alt="" />
          </button>
          <button className="arrow-icon-card">
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
