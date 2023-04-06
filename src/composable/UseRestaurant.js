import Cookies from "js.cookie";
import { getEmailAndPassword } from "@/components/ConnectionPopUp.vue";

const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";
const API_ENDPOINT_SECURE = "https://ufoodapi.herokuapp.com/";
const User = "604cc220ef6fa10004dc0179";

let email = "";
let password = "";
let response = "";
let token = "";
let idUser = "";

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
  const token = Cookies.get("ConnectionToken");
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
  const token = Cookies.get("ConnectionToken");
  const res = await fetch(`${API_ENDPOINT}/users/${User}/restaurants/visits`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return res.json();
};

export const getUserFavorites = async function (id) {
  const token = Cookies.get("connectionToken");
  console.log(token);
  console.log(token.token);
  console.log(token.id);
  const req = new Request(`${API_ENDPOINT_SECURE}users/${id}/favorites`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token.token,
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const addToFavorites = async (listID, restoID) => {
  try {
    // const token = Cookies.get("ConnectionToken");
    // console.log("token =" + token);
    const request = new Request(
      `${API_ENDPOINT_SECURE}/favorites/${listID}/restaurants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
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
  const req = new Request(`${API_ENDPOINT}/favorites/${idListe}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });
  const res = await fetch(req);
  return res.json();
};

export const logIn = async function (email, password) {
  const res = await fetch("https://ufoodapi.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const response = await res.json();
  const token = { token: response.token, id: response.id };
  Cookies.set("connectionToken", token);
};
