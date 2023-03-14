const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

export const getRestaurant = async function (id) {
  const req = new Request(`${API_ENDPOINT}/restaurants/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const getRestaurants = async function () {
  const req = new Request(`${API_ENDPOINT}/restaurants?limit=1000`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const postReview = async function (
  id,
  restaurantId,
  comment,
  rating,
  date
) {
  const req = new Request(`${API_ENDPOINT}/users/${id}/restaurants/visits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      restaurant_id: restaurantId,
      comment: comment,
      rating: rating,
      date: date,
    }),
  });
  const res = await fetch(req);
  return res.json();
};
