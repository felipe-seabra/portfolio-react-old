import React from "react";
import Card from "./Card";
import data from "../backend/data";

export default class Projects extends React.Component {
  state = {
    loading: true,
  };

  handleGetProjects = async () => {
    <Card loading={loading} />;
    await data.map((card) => <Card image={card.image} name={card.name} description={card.description} url={card.url} />);
  };
  render() {
    return (
      <div className="background-color-grey container-fluid">
        <div className="title">
          <h2>Meus Projetos</h2>
        </div>
        <div className="card-box">{this.handleGetProjects}</div>
      </div>
    );
  }
}
