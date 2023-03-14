/* eslint-disable */
import { ENDPOINT } from "./api";
import { ID } from "./api";

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
    console.log(error);
    return [];
  }
};
