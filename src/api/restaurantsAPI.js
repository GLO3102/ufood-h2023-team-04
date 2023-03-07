const ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

export const getRestaurants = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/restaurants`);
    const data = await response.json();
    const test = data.items;
    const restaurants = data.items.slice().map((item) => {
      return {
        name: item.name,
        rating: item.rating,
        genres: item.genres,
        price: item.price_range.toString(),
      };
    });
    console.log(test);
    return restaurants;
  } catch (error) {
    console.error("can't fecth restaurants names", error);
    return [];
  }
};
