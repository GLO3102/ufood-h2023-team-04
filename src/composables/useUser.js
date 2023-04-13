import { ENDPOINT, ENDPOINT_SECURE } from "./API_ENDPOINT";
import { ID } from "./API_ENDPOINT";
import Cookies from "js.cookie";

export const getVisitedRestaurant = async (userID) => {
  try {
    const response = await fetch(
      `${ENDPOINT}/users/${userID}/restaurants/visits`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    console.log(token.token);
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token.token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllUsersInfo = async (token) => {
  try {
    const response = await fetch(`${ENDPOINT_SECURE}/users?limit=30`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("can't do SHIT", error);
    return [];
  }
};

export const getUserVisits = async (token, userID) => {
  try {
    const response = await fetch(
      `${ENDPOINT_SECURE}/users/${userID}/restaurants/visits?limit=30`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
};

export const getUserFavoriteLists = async (userID) => {
  try {
    const response = await fetch(`${ENDPOINT}/users/${userID}/favorites`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const getUserInfoFollowers = async (userID) => {
  try {
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`);
    const data = await response.json();
    return data.followers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserInfoFollowing = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token.token,
      },
    });
    const data = await response.json();
    return data.following;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/* const token = Cookies.get("connectionToken");
    console.log(token.token);
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token.token,
      },
    });
 */
//* Va falloir tester quand je vais avoir le token
export const deleteFollower = async (ID) => {
  try {
    const req = new Request(`${ENDPOINT}/follow/${ID}`, {
      method: "DELETE",
      headers: {
        authorization: "${TOKEN}",
      },
    });
    console.log(ID);
    await fetch(req);
  } catch (error) {
    console.error("Ne supprime pas le follower");
  }
};

//* Va falloir tester quand je vais avoir le token
export const followUser = async (userFollowID) => {
  try {
    const req = new Request(`${ENDPOINT}/follow/`, {
      method: "POST",
      headers: {
        authorization: "${TOKEN}",
        body: JSON.stringify({ id: "userFollowID" }),
      },
    });
    await fetch(req);
  } catch {
    console.log("Ne peut pas follow le user");
  }
};
