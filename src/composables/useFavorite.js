/* eslint-disable */
import { ENDPOINT } from "./API_ENDPOINT";
import { ID } from "./API_ENDPOINT";

export const getFavoriteById = async (id) => {
  try {
    const response = await fetch(`${ENDPOINT}/favorites/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postNewList = async (payload) => {
  if (!payload) {
    console.error("Enter a list name");
    window.alert("List name cannot be empty");
    return null;
  }
  try {
    const request = new Request(`${ENDPOINT}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const putList = async (payload, id) => {
  try {
    const request = new Request(`${ENDPOINT}/favorites/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    await fetch(request);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteList = async (id) => {
  try {
    const request = new Request(`${ENDPOINT}/favorites/${id}`, {
      method: "DELETE",
    });
    await fetch(request);
  } catch (error) {
    console.error(error);
  }
};

export const postAddRestoInList = async (listID, restoID) => {
  
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

export const deleteRestoFromList = async (listID, restoID) => {
  try {
    const request = new Request(
      `${ENDPOINT}/favorites/${listID}/restaurants/${restoID}`,
      {
        method: "DELETE",
      }
    );
    await fetch(request);
  } catch (error) {
    console.error(error);
  }
};
