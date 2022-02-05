import { Todo } from "../state";

export const setItem = (key : string, item : Todo) => {
  localStorage.setItem(key, JSON.stringify(item));
}