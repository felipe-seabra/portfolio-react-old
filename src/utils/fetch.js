const fetchGithubApi = async (query) => {
  const data = await fetch(`https://api.github.com/users/felipe-seabra/${query}`)
    .then((response) => response.json());
  return data;
};
export default fetchGithubApi;
