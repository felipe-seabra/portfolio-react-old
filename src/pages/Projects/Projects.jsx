import React, { useState, useEffect } from 'react';
import './style/Projects.scss';
import { Card } from '../../components';
import setPageTitle from '../../utils/setPageTitle';
import data from '../../data';

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPageTitle('Projetos - Felipe Seabra');
    const TIMEOUT_LIMIT = 800;
    const timeoutId = setTimeout(() => setIsLoaded(true), TIMEOUT_LIMIT);

    return () => clearTimeout(timeoutId);
  }, []);

  const renderCards = () => {
    if (data.length < 1) {
      return <p>Nenhum projeto encontrado</p>;
    }

    return data.map((card) => (
      <Card
        key={ card.name }
        image={ card.image }
        name={ card.name }
        description={ card.description }
        url={ card.url }
        isLoaded={ isLoaded }
      />
    ));
  };

  return (
    <div className="background-color-grey projects">
      <div className="projects__title">
        <h2>Meus Projetos</h2>
      </div>
      <div className="projects__card-box">{renderCards()}</div>
    </div>
  );
}
