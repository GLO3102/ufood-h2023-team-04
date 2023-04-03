import { ENDPOINT } from "./API_ENDPOINT";
import { ID } from "./API_ENDPOINT";

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
    const response = await fetch(`${ENDPOINT}/users/${userID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllUsersInfo = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/users`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("can't do SHIT", error);
    return [];
  }
};

export const getUserVisits = async () => {
  try {
    const response = await fetch(
      `${ENDPOINT}/users/${ID}/restaurants/visits?limit=15`
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

export const getUserInfoFollowers = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/users/${ID}`);
    const data = await response.json();
    return data.followers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserInfoFollowing = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/users/${ID}`);
    const data = await response.json();
    return data.following;
  } catch (error) {
    console.error(error);
    return [];
  }
};

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
      method: "DELETE",
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
