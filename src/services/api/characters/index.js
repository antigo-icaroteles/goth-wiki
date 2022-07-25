import instance from "..";

export const getCharacters = async () => {
  const response = await instance
    .get("/api/v2/Characters")
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};

export const getCharacter = async (id) => {
  const response = await instance
    .get(`/api/v2/Characters/${id}`)
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
