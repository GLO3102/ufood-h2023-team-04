import { ENDPOINT } from "./api";

export const getRestaurantsNameByID = async (restoId) => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants/${restoId}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
};
