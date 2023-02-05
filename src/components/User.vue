<template>
  <body class="bg-gradient-to-r from-teal-600 to-teal-300 antialiased">
    <div class="h-screen">
      <div>
        <div
          class="bg-white relative shadow rounded-lg w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto top-24"
        >
          <div class="flex justify-center">
            <img
              src="https://avatarfiles.alphacoders.com/231/231277.jpg"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div class="mt-16">
            <h1 class="font-bold text-center text-3xl text-gray-900"></h1>
            <p class="text-center">
              <span> {{ users[$route.params.currentUserID].fullname }} </span>
            </p>

            <div class="flex justify-between items-center my-5 px-6">
              <a
                class="text-gray-500 bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Score: {{ users[$route.params.currentUserID].score }}</a
              >
            </div>
            <div
              v-if="
                Object.keys(users[$route.params.currentUserID].visits).length >
                0
              "
            >
              <div class="w-full">
                <h3 class="font-medium text-gray-900 text-left px-6">
                  Recent visits
                </h3>
                <div
                  class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
                >
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
                    v-for="val in users[$route.params.currentUserID].visits"
                    :key="val.name"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt="Profile picture"
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    {{ val.name + " - " + val.amount + " visits" }}
                  </a>
                </div>
              </div>
            </div>
            <div
              class="grid justify-items-center"
              v-if="
                Object.keys(users[$route.params.currentUserID].visits)
                  .length === 0
              "
            >
              <router-link :to="{ name: 'Home' }">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Home
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import MY_JSON from "@/data/users.json";
export default {
  data() {
    return {
      users: MY_JSON,
    };
  },
};
</script>

<style></style>
