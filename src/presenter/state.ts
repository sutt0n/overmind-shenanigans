export type Starship = {
  name: string,
  model: string,
  url: string,
  manufacturer: string,
  length: string,
  starship_class: string,
  hyperdrive_rating: string,
};

export const state = {
  currentPage: 'home',
  isLoading: false as boolean,
  starships: [] as Starship[],
  favorites: [] as string[],
};