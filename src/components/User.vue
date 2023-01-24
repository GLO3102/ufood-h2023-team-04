<template>
  <body class="bg-gray-300 antialiased">
    <div class="container mx-auto my-60">
      <div>
        <div
          class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto"
        >
          <div class="flex justify-center">
            <img
              src="https://avatarfiles.alphacoders.com/231/231277.jpg"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div class="mt-16">
            <h1 class="font-bold text-center text-3xl text-gray-900">
              David Côté
            </h1>
            <p class="text-center text-sm text-gray-400 font-medium">
              UI Components Factory
            </p>
            <p>
              <span> </span>
            </p>
            <div class="flex justify-between items-center my-5 px-6">
              <a
                href=""
                class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >69 points</a
              >
              <a
                href=""
                class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Twitter</a
              >
              <a
                href=""
                class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Instagram</a
              >
              <a
                href=""
                class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Email</a
              >
            </div>

            <div v-if="visit" class="w-full">
              <h3 class="font-medium text-gray-900 text-left px-6">
                Recent visit
              </h3>
              <div
                class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
              >
                <a
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  La belle et la boeuf
                  <span class="text-gray-500 text-xs">24 min ago</span>
                </a>

                <a
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Le roi du spaghetti
                  <span class="text-gray-500 text-xs">42 min ago</span>
                </a>

                <a
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Le Drague
                  <span class="text-gray-500 text-xs">49 min ago</span>
                </a>

                <a
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Institut de psychiatrie légale Philippe-Pinel
                  <span class="text-gray-500 text-xs">1 day ago</span>
                </a>

                <a
                  href="#"
                  class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  La petite poutine
                  <span class="text-gray-500 text-xs">5 days ago</span>
                </a>
              </div>
            </div>
            <div>
              <li v-if="!visit">
                <router-link to="/">Home</router-link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      visit: true,
    };
  },
};
</script>

<style></style>

<!-- 
  Afficher la page du profil utilisateur
Nom de l'utilisateur
Score de l'utilisateur
Une liste des restaurants visités récemment, incluant le nombre de visite(s) à chaque restaurant
Dans le cas d'aucune visite(s), un lien vers la page d'accueil -->
