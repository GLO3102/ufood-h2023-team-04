import { ENDPOINT } from "@/composables/API_ENDPOINT";
import { id } from "vuetify/locale";

const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";
const User = "604cc220ef6fa10004dc0179";

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

export const getUserFavorites = async function (id) {
  const req = new Request(`${API_ENDPOINT}/users/${id}/favorites`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const addToFavorites = async (listID, restoID) => {
  try {
    const request = new Request(`${ENDPOINT}/favorites/${listID}/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: restoID }),
    });
    await fetch(request);
  } catch (error) {
    console.error(error);
  }
};
export const getListefavori = async function (idListe) {
  const req = new Request(`${API_ENDPOINT}/favorites/${idListe}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};
