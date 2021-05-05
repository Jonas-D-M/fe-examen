export const get = (endpoint: string) => {
  return fetch(endpoint).then((r) => r.json());
};
