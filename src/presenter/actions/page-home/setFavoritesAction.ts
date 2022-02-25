import { Context } from "../..";

export const setFavoritesAction = async ({ state, effects }: Context) => {
  const favorites = effects.getItem("favorites") || [];

  state.favorites = favorites;
};