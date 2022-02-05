import type { Context } from "../";
import { Todo } from "../state";

export const addTodoAction = (
  { state, effects }: Context,
  { title, description }: Todo
) => {
  const currentTodos = effects.getItem('todos') || [];

  const newTodo = {
    title, description,
  };

  currentTodos.push(newTodo);

  state.todos = currentTodos;

  effects.setItem('todos', currentTodos);
};
