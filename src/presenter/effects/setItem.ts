export const setItem = (key : string, item : any) => {
  localStorage.setItem(key, JSON.stringify(item));
}