const API_ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

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
