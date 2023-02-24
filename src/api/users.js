import { ENDPOINT } from "./api";

export const getVisitedRestaurant = async () => {
  const request = new Request(
    `${ENDPOINT}/users/604cc220ef6fa10004dc0179/restaurants/visits`,
    { method: "GET" }
  );
  const response = await fetch(request);
  return (await response.json()).tasks;
};
