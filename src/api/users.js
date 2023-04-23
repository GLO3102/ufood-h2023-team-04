import { ENDPOINT_SECURE } from "../composables/API_ENDPOINT";
import { ID } from "../composables/API_ENDPOINT";
import Cookies from "js.cookie";

export const getVisitedRestaurant = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    const response = await fetch(
      `${ENDPOINT_SECURE}/users/${userID}/restaurants/visits`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token.token,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* export const getUserInfo = async (userID) => {
  try {
    const response = await fetch(`${ENDPOINT}/users/${userID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}; */

/* export const getAllUsersInfo = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/users?limit=40`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("can't do SHIT", error);
    return [];
  }
}; */

/* export const getUserVisits = async (userId) => {
  try {
    const response = await fetch(
      `${ENDPOINT}/users/${userId}/restaurants/visits?limit=500`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
}; */

export const getUserFavoriteLists = async (userID) => {
  try {
    const token = Cookies.get("connectionToken").token;
    const req = new Request(`${ENDPOINT_SECURE}/users/${userID}/favorites`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const response = await fetch(req);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const getVisitInformation = async (visitID) => {
  try {
    const token = Cookies.get("connectionToken").token;
    const req = new Request(
      `${ENDPOINT_SECURE}/users/${ID}/restaurants/visits/${visitID}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const response = await fetch(req);
    const data = await response.json();
    return data.items;
  } catch (error) {
    return [];
  }
};
