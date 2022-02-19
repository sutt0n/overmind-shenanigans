import { Context } from "../..";

export const getAllStarshipsAction = async ({ state, effects }: Context) => {
  state.starships = await effects.getStarships();

  console.log('state.starships', state.starships);
};