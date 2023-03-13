import { ENDPOINT } from "./api";
import { ID } from "./api";

export const getVisitedRestaurant = async () => {
  const request = new Request(`${ENDPOINT}/users/${ID}/restaurants/visits`, {
    method: "GET",
  });
  const response = await fetch(request);
  return (await response.json()).tasks;
};

export const getUserInfo = async () => {
  const request = new Request(`${ENDPOINT}/users/${ID}`, { method: "GET" });
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

export const getUserVisits = async () => {
  try {
    const response = await fetch(
      `${ENDPOINT}/users/${ID}/restaurants/visits?limit=15`
    );
    const data = await response.json();
    console.log(data);
    return data.items;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
};
