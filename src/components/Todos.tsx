import React from "react";
import {  useAppState } from "../presenter";

export const Todos = () => {
  const state = useAppState();

  return (
    <>
      {state.todos.map(todo => (
        <ul key={`todo-title-${todo.title}`}>
          <li><b>{todo.title}</b> - {todo.description}</li>
        </ul>
      ))}
    </>
  );
};
