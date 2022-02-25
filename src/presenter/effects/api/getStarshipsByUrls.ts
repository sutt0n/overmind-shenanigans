import axios from "axios";

export const getStarshipsByUrls = async (urls: string[]) => {
  const promises = [];

  for (let i = 0; i <= urls.length; i++) {
    if (typeof urls[i] === "string") {
      promises.push(axios.get(urls[i]));
    }
  }

  const [...promiseResults] = await Promise.all(promises);

  const starships = promiseResults.map(({ data }) => data).flat(1);

  return starships;
};
