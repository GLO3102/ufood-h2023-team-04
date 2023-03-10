import { fetchRestaurants } from "../api/restaurantsAPI";

export const getRestaurants = async () => {
  try {
    const data = await fetchRestaurants();
    const restaurants = data.items.slice().map((item) => {
      return {
        name: item.name,
        rating: item.rating,
        genres: item.genres,
        price: item.price_range.toString(),
      };
    });
    console.log(restaurants);
    return restaurants;
  } catch (error) {
    console.error("Error fetching restaurants data", error);
    return [];
  }
};
