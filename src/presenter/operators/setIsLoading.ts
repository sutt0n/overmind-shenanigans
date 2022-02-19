import { Context } from "..";

export const setIsLoading = (value : boolean) => ({ state } : Context) => {
  state.isLoading = value;
};