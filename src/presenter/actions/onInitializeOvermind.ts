import type { Context } from "../";

export const onInitializeOvermind = (
  { state, effects, actions }: Context
) => {
  const currentFavorites = effects.getItem('favorites') || [];

  effects.router.initialize({
    '/': actions.showHomePageSequence,
    '/starships': actions.showStarshipsPageSequence,
  });

  state.favorites = currentFavorites;
};
