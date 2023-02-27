import { getAllUsersInfo } from "../api/users.js";
import { ref, onMounted } from "vue";

export function useUsers() {
  //const isLoading = ref(false);
  const users = ref(null);

  onMounted(async () => {
    //isLoading.value = true;
    try {
      users.value = await getAllUsersInfo();
    } catch (err) {
      //TODO handle error
    }
    isLoading.value = false;
  });

  // expose managed state as return value
  return { users };
}
