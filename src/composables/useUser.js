import { ENDPOINT_SECURE } from "./API_ENDPOINT";
import { ID } from "./API_ENDPOINT";
import Cookies from "js.cookie";

export const getVisitedRestaurant = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    const req = new Request(
      `${ENDPOINT_SECURE}/users/${userID}/restaurants/visits`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const response = await fetch(req);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async (userID) => {
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
    return [];
  }
};

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

export const getUserInfoFollowers = async (token, userID) => {
  try {
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data.followers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserInfoFollowing = async (token, userID) => {
  try {
    const response = await fetch(`${ENDPOINT_SECURE}/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data.following;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteFollower = async (token, userUnfollowID) => {
  try {
    const req = new Request(`${ENDPOINT_SECURE}/follow/${userUnfollowID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    await fetch(req);
  } catch (error) {
    console.error("Ne supprime pas le follower");
  }
};

export const followUser = async (token, userFollowID) => {
  try {
    const req = new Request(`${ENDPOINT_SECURE}/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ id: userFollowID }),
    });
    await fetch(req);
  } catch {
    console.log("Ne peut pas follow le user");
  }
};
