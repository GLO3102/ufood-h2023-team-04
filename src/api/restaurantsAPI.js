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

export const postReview = async (review) => {
  const response = await fetch(
    `${ENDPOINT}/users/636d37d5a4823385784320a2/restaurants/visits`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(review),
    }
  );
};
