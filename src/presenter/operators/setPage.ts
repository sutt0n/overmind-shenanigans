import { Context } from "..";

export const setPage = (page : string) => ({ state } : Context) => {
  state.currentPage = page;
};