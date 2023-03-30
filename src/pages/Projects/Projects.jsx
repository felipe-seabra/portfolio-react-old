import React, { useState, useEffect } from 'react';
import './style/Projects.scss';
import { Card } from '../../components';
import setPageTitle from '../../utils/setPageTitle';
import fetchGithubApi from '../../utils/fetch';

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPageTitle('Projetos - Felipe Seabra');

      const repositories = await fetchGithubApi('repos');

      const filteredRepositories = repositories
        .filter((repo) => !repo.name.startsWith('felipe'));

      setRepos(filteredRepositories);
    }

    fetchData();

    const TIMEOUT_LIMIT = 800;
    const timeoutId = setTimeout(() => setIsLoaded(true), TIMEOUT_LIMIT);

    return () => clearTimeout(timeoutId);
  }, []);

  const renderCards = () => {
    if (repos.length < 1) {
      return <p>Nenhum projeto encontrado</p>;
    }

    return repos.map((card) => (
      <Card
        key={ card.id }
        name={ card.name }
        description={ card.description }
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
