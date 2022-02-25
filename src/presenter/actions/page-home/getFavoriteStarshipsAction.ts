import { Context } from "../..";

export const getFavoriteStarshipsAction = async ({ state, effects }: Context) => {
  state.starships = await effects.getStarshipsByUrls(state.favorites);
};