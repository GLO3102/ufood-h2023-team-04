import { ENDPOINT } from "../composables/API_ENDPOINT";

export const getRestaurantsNameByID = async (restoId) => {
  try {
    if (restoId.length !== 24) {
      console.log(restoId);
      throw new Error("Invalid restaurant ID length. Must be 6 characters.");
    } else {
      const response = await fetch(`${ENDPOINT}/restaurants/${restoId}`);
      const data = await response.json();
      return data.name;
    }
  } catch (error) {
    console.error("Erreur recherche visit, restoID invalide:", restoId);
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
