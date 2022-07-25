import instance from "..";

export const getContinents = async () => {
  const response = await instance
    .get("/api/v2/Continents")
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
