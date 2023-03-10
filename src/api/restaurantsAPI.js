const ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants?limit=1000`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("can't fecth restaurants names", error);
    return null;
  }
};
