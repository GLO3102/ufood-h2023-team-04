const API_ENDPOINT = "https://ufoodapi.herokuapp.com";

export const signUp = async function (name, email, password) {
  try {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    const req = new Request(`${API_ENDPOINT}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const res = await fetch(req);
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        console.error("Error:", data);
        throw new Error(
          data.message || "An error occurred during the signUp process."
        );
      }
    } else {
      const text = await res.text();

      if (res.ok) {
        return text;
      } else {
        console.error("Error:", text);
        throw new Error(text || "An error occurred during the signUp process.");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
