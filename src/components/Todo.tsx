import React, { useState } from "react";
import { useActions } from "../presenter";

export const Todo = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const actions = useActions();

  return (
    <>
      <div>
        <input
          name="title"
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="description"
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => {
          actions.addTodoAction({ title, description })
        }}>Add Todo</button>
      </div>
    </>
  );
};
