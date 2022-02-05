export type Todo = {
  title: string,
  description: string,
};

export const state = {
  todos: [] as Todo[],
};