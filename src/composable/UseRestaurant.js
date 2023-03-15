const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";
const User = "636d37d5a4823385784320a2";
//const User2 = "639bbf092b5bb7844f430e47";
//const User3 = "604cc220ef6fa10004dc0179";

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

export const postReview = async function (comment, rating, date, restaurantId) {
  const req = new Request(`${API_ENDPOINT}/users/${User}/restaurants/visits`, {
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
  if (!res.ok) {
    window.alert("get gud scrub!");
  }
  console.log("SUCCESS!");
  return res.json();
};

export const getVisitedRestaurentsByUser = async function () {
  const res = await fetch(`${API_ENDPOINT}/users/${User}/restaurants/visits`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
