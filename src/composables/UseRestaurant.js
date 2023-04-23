import Cookies from "js.cookie";
import { ENDPOINT_SECURE } from "./API_ENDPOINT";

let email = "";
let password = "";
let response = "";
let token = "";
let idUser = "";

export const getRestaurant = async function (id) {
  const token = Cookies.get("connectionToken").token;
  const req = new Request(`${ENDPOINT_SECURE}/restaurants/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const getRestaurants = async function () {
  const token = Cookies.get("connectionToken").token;
  const req = new Request(`${ENDPOINT_SECURE}/restaurants?limit=1000`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const postReview = async function (comment, rating, date, restaurantId) {
  const cookie = Cookies.get("connectionToken");
  const req = new Request(
    `${ENDPOINT_SECURE}/users/${cookie.id}/restaurants/visits`,
    {
      method: "POST",
      headers: {
        Authorization: cookie.token,
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
  if (!res.ok) {
    window.alert("get gud scrub!");
  }
  console.log("SUCCESS!");
  return res.json();
};

export const getVisitedRestaurentsByUser = async function () {
  const cookie = Cookies.get("connectionToken");
  const res = await fetch(
    `${ENDPOINT_SECURE}/users/${cookie.id}/restaurants/visits`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie.token,
      },
    }
  );

  return res.json();
};

export const getUserFavorites = async function (id) {
  const token = Cookies.get("connectionToken").token;
  const req = new Request(`${ENDPOINT_SECURE}/users/${id}/favorites`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const addToFavorites = async (listID, restoID) => {
  try {
    const token = Cookies.get("connectionToken").token;
    const request = new Request(
      `${ENDPOINT_SECURE}/favorites/${listID}/restaurants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ id: restoID }),
      }
    );
    await fetch(request);
  } catch (error) {
    console.error(error);
  }
};
export const getListefavori = async function (idListe) {
  const token = Cookies.get("connectionToken").token;
  const req = new Request(`${ENDPOINT_SECURE}/favorites/${idListe}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const logIn = async function (email, password) {
  try {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    const res = await fetch(`${ENDPOINT_SECURE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    const contentType = res.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = await res.text();
    }
    if (res.ok) {
      const token = { token: data.token, id: data.id };
      Cookies.set("connectionToken", token);
    } else {
      console.error("Error:", data);
      throw new Error(
        data.message || "An error occurred during the login process."
      );
    }
  } catch (err) {
    throw new Error("Invalid credentials");
  }
};

export const getRestaurantsNameByID = async (token, restoId) => {
  try {
    if (restoId.length !== 24) {
      throw new Error("Invalid restaurant ID length. Must be 6 characters.");
    } else {
      const response = await fetch(
        `${ENDPOINT_SECURE}/restaurants/${restoId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      return data.name;
    }
  } catch (error) {
    console.error("Erreur recherche visit, restoID invalide:", restoId);
    return [];
  }
};
