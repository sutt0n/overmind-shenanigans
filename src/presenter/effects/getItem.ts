export const getItem = (key : string) => {
  const item = localStorage.getItem(key);

  if(item) {
    return JSON.parse(item);
  }

  return null;
}