/* eslint-disable */
import { ENDPOINT } from "../composables/API_ENDPOINT";
import { ID } from "../composables/API_ENDPOINT";

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
      `${ENDPOINT}/users/${ID}/restaurants/visits?limit=500`
    );
    const data = await response.json();
    console.log(data);
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

export const getVisitInformation = async (visitID) => {
  try {
    const response = await fetch(
      `${ENDPOINT}/users/${ID}/restaurants/visits/${visitID}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Erreur recherche visit", error);
    return [];
  }
};
