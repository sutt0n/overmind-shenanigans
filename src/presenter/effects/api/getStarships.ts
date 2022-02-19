import axios from 'axios';

export const getStarships = async (all : boolean = true) => {
  const { data: { count: total, results } } = await axios.get('https://swapi.dev/api/starships');

  const numPages = Math.ceil(total / results.length) - 1;
  const promises = [];

  for(let i = 2; i <= numPages + 1; i++) {
    promises.push(axios.get(`https://swapi.dev/api/starships?page=${i}`));
  }

  const [...promiseResults] = await Promise.all(promises);

  const starships = [...results, ...promiseResults.map(({ data }) => ([...data.results])).flat(1)];

  return starships;
};