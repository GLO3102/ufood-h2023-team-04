<template>
  <body class="bg-white">
    <div class="flex flex-col space-y-4 pt-3 mx-3 items-center">
      <div class="container w-full ms:w-60">
        <div class="container rounded bg-neutral-800 shadow-2xl">
          <h3 class="font-bold text-neutral-100 text-center text-2xl p-4">
            La belle et la boeuf
          </h3>
          <div class="text-center p-4">
            <div class="mb-4">
              <p class="text-neutral-100">
                Adresse : 2450 Bd Laurier, Québec, QC G1V 2L1
              </p>
              <p class="text-neutral-100">Téléphone : (581) 742-5444</p>
            </div>
            <div class="responsive-table">
              <table class="table-auto w-full text-center text-xs">
                <thead>
                  <tr class="bg-gray-400">
                    <th class="px-1 py-2">Jour</th>
                    <th class="px-1 py-2">Ouverture</th>
                    <th class="px-1 py-2">Fermeture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-neutral-300">
                    <td class="border px-1 py-2">Lundi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-100">
                    <td class="border px-1 py-2">Mardi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-300">
                    <td class="border px-1 py-2">Mercredi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-100">
                    <td class="border px-1 py-2">Jeudi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-300">
                    <td class="border px-1 py-2">Vendredi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-100">
                    <td class="border px-1 py-2">Samedi</td>
                    <td class="border px-1 py-2">9:00</td>
                    <td class="border px-1 py-2">17:00</td>
                  </tr>
                  <tr class="bg-neutral-300">
                    <td class="border px-1 py-2">Dimanche</td>
                    <td class="border px-1 py-2">Fermé</td>
                    <td class="border px-1 py-2">Fermé</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="container w-full ms:w-60">
        <div
          class="container flex flex-row rounded bg-neutral-800 shadow-2xl justify-center p-3 text-center"
        >
          <div>
            <h3 class="font-bold text-neutral-100 text-lg p-4">Price range</h3>
            <p class="text-neutral-100">between 20$ and 50$</p>
          </div>
        </div>
      </div>
      <div class="container w-full ms:w-60">
        <div
          class="container flex flex-row rounded bg-neutral-800 shadow-2xl justify-center p-3 text-center"
        >
          <div>
            <h3 class="font-bold text-neutral-100 text-lg p-4">Genre</h3>
            <p class="text-neutral-100">Resto-Bar</p>
          </div>
        </div>
      </div>
      <div class="container w-full ms:w-60">
        <div
          class="container flex flex-row rounded bg-neutral-800 shadow-2xl justify-center p-3 text-center"
        >
          <div>
            <h3 class="font-bold text-neutral-100 text-center text-lg p-4">
              Côte
            </h3>
            <p class="text-neutral-100 text-center">9/10</p>
          </div>
        </div>
      </div>
      <div class="container w-full">
        <div
          class="container bg-neutral-800 shadow-2xl p-3 rounded mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3"
        >
          <div class="flex w-full rounded justify-center">
            <img
              src="https://barbiesgrill.com/wp-content/uploads-min/Brossard-1.resized-s.webp"
              alt="image"
            />
          </div>
          <div class="flex w-full rounded justify-center">
            <img
              src="https://barbiesgrill.com/wp-content/uploads-min/brochette.resized-s.webp"
              alt="image"
            />
          </div>
          <div class="flex w-full rounded justify-center">
            <img
              src="https://barbiesgrill.com/wp-content/uploads-min/Laval-1.resized-s.webp"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div class="container w-full ms:w-60 shadow-2xl pb-3">
        <div class="bg-blue-900 h-64">
          <div class="justify-center items-center h-64 w-full">
            <iframe
              class="h-full w-full"
              :src="link"
              width="720"
              height="720"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
      currentLocation: null,
      destinationAddress: "2450 Bd Laurier, Québec, QC G1V 2L1",
      link: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&q=2450 Bd Laurier, Québec, QC G1V 2L1",
    };
  },
  computed: {
    directionLink() {
      return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&origin=${this.currentLocation}&destination=${this.destinationAddress}`;
    },
  },
  methods: {
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.currentLocation = `${position.coords.latitude},${position.coords.longitude}`;
        });
      }
    },
  },
  created() {
    this.getCurrentLocation();
  },
  watch: {
    currentLocation: {
      handler() {
        if (this.currentLocation) {
          this.link = this.directionLink;
        } else {
          this.link = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&q=${this.destinationAddress}`;
        }
      },
    },
  },
};
</script>

<style>
.responsive-table {
  overflow-x: auto;
}
</style>
