import React from 'react';
import '../styles/pages/Projects.css';
import Card from '../components/Card';
import data from '../data';

export default class Projects extends React.Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    const num = 300;
    setTimeout(async () => {
      await this.setState({ isLoaded: true });
    }, num);
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="background-color-grey container-fluid">
        <div className="title">
          <h2>Meus Projetos</h2>
        </div>
        <div className="card-box">
          {data.length < 1
            ? <p>Nenhum projeto encontrado</p>
            : data.map((card) => (
              <Card
                key={ card.name }
                image={ card.image }
                name={ card.name }
                description={ card.description }
                url={ card.url }
                isLoaded={ isLoaded }
              />
            ))}
        </div>
      </div>
    );
  }
}
