import { ENDPOINT } from "./api";

const tempId = "639bbf092b5bb7844f430e47";

export const getVisitedRestaurant = async () => {
  const request = new Request(
    `${ENDPOINT}/users/${tempId}/restaurants/visits`,
    {
      method: "GET",
    }
  );
  const response = await fetch(request);
  return (await response.json()).tasks;
};

export const getUserInfo = async () => {
  const request = new Request(`${ENDPOINT}/users/${tempId}`, { method: "GET" });
  const response = await fetch(request);
  return (await response.json()).tasks;
};

export const getAllUsersInfo = async () => {
  const request = new Request(`${ENDPOINT}/users`, {
    method: "GET",
  });
  const response = await fetch(request);
  return (await response.json()).tasks;
};
