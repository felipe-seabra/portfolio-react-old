import React, { useState, useEffect } from 'react';
import './style/Projects.scss';
import Card from '../../components/Card';
import data from '../../data';

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Projetos - Felipe Seabra';
    const TOMEOUT_LIMIT = 800;
    setTimeout(() => {
      setIsLoaded(true);
    }, TOMEOUT_LIMIT);
  }, []);

  return (
    <div className="background-color-grey projects">
      <div className="projects__title">
        <h2>Meus Projetos</h2>
      </div>
      <div className="projects__card-box">
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
