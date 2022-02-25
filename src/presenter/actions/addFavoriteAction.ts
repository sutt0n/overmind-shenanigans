import type { Context } from "..";

export const addFavoriteAction = (
  { state, effects }: Context,
  url: string,
) => {
  // add to favorites
  const currentFavorites = effects.getItem("favorites") || [];

  currentFavorites.push(url);

  state.favorites = currentFavorites;

  effects.setItem("favorites", currentFavorites);

  // remove from state
  state.starships = [...state.starships.filter(starship => {
    return url !== starship.url
  })];
};
