import { ENDPOINT } from "./API_ENDPOINT";

export const getRestaurantsNameByID = async (restoId) => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants/${restoId}`);
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
};

export const getAllRestaurants = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants?limit=9999`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
