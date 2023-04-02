/* eslint-disable */
import { ENDPOINT, ENDPOINT_SECURE } from "./api";
import { ID } from "./api";
import Cookies from "js.cookie";

export const getVisitedRestaurant = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    const response = await fetch(`${ENDPOINT_SECURE}/users/${token.id}/restaurants/visits`,{
      headers : {
        authorization : token.token
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async (userID) => {
  try {
    const token = Cookies.get("connectionToken");
    const response = await fetch(`${ENDPOINT_SECURE}/users/${token.id}`,{
      headers : {
        authorization : token.token
      }
    });
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
    const token = Cookies.get("connectionToken");
    const response = await fetch(
      `${ENDPOINT_SECURE}/users/${token.id}/restaurants/visits?limit=15`, {
        headers : {
          authorization : token.token
        }
      }
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
    const token = Cookies.get("connectionToken");
    const response = await fetch(`${ENDPOINT_SECURE}/users/${token.id}/favorites`,{
      headers : {
        authorization: token.token
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
