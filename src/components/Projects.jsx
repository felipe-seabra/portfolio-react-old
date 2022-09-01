import React from "react";
import Card from "./Card";
import data from "../backend/data";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="background-color-grey container-fluid">
        <div className="title">
          <h2>Meus Projetos</h2>
        </div>
        <div className="card-box">
          {data.map((card) => (
            <Card
              key={card.name}
              image={card.image}
              name={card.name}
              description={card.description}
              url={card.url}
              isLoaded={true}
            />
          ))}
        </div>
      </div>
    );
  }
}
