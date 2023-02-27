const ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

export const getRestoNames = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants`);
    const data = await response.json();
    const restaurants = data.items.slice(0, 9).map((item) => {
      return {
        name: item.name,
        rating: item.rating,
        genres: item.genres,
        price: item.price_range,
      };
    });
    return restaurants;
  } catch (error) {
    console.error("can't fecth restaurants names", error);
    return [];
  }
};
