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
  try {
    const response = await fetch(`${ENDPOINT}/users`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("can't do SHIT", error);
    return [];
  }
};
