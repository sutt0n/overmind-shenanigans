import type { Context } from "..";

export const addFavoriteAction = (
  { state, effects }: Context,
  url : string,
  idx : number,
) => {

  // add to favorites
  const currentFavorites = effects.getItem('favorites') || [];

  currentFavorites.push(url);

  state.favorites = currentFavorites;

  effects.setItem('todos', currentFavorites);

  // remove from state
  state.starships.slice(idx, idx + 1);
};
