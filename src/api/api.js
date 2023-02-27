export const ENDPOINT = "https://ufoodapi.herokuapp.com/unsecure";

export const ACTIVEUSER = "Jean-Bob";

export default {
  setup() {
    const updateActiveUser = (id) => {
      console.log("sexe");
      ACTIVEUSER = id;
    };
    return {
      updateActiveUser,
    };
  },
};
