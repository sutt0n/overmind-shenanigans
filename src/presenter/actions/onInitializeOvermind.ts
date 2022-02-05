import type { Context } from "../";

export const onInitializeOvermind = (
  { state, effects }: Context
) => {
  const currentTodos = effects.getItem('todos') || [];

  state.todos = currentTodos;
};
