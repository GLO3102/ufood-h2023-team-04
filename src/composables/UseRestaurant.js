import { ENDPOINT } from "@/composables/API_ENDPOINT";
import { id } from "vuetify/locale";

const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";
const User = "604cc220ef6fa10004dc0179";

export const getRestaurant = async function (id) {
  try {
    const req = new Request(`${API_ENDPOINT}/restaurants/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetch(req);
    if (!res.ok) throw new Error("Failed to fetch restaurant data");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRestaurants = async function () {
  try {
    const req = new Request(`${API_ENDPOINT}/restaurants?limit=1000`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetch(req);
    if (!res.ok) throw new Error("Failed to fetch restaurants data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postReview = async function (comment, rating, date, restaurantId) {
  try {
    const req = new Request(
      `${API_ENDPOINT}/users/${User}/restaurants/visits`,
      {
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
      }
    );

    const res = await fetch(req);
    if (!res.ok) throw new Error("Failed to post review");
    console.log("SUCCESS!");
    return res.json();
  } catch (error) {
    console.error(error);
    window.alert("get gud scrub!");
    return null;
  }
};

export const getVisitedRestaurentsByUser = async function () {
  try {
    const res = await fetch(
      `${API_ENDPOINT}/users/${User}/restaurants/visits`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch visited restaurants data");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserFavorites = async function (id) {
  try {
    const req = new Request(`${API_ENDPOINT}/users/${id}/favorites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetch(req);
    if (!res.ok) throw new Error("Failed to fetch user favorites data");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
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
  try {
    const req = new Request(`${API_ENDPOINT}/favorites/${idListe}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetch(req);
    if (!res.ok) throw new Error("Failed to fetch favorite list data");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
