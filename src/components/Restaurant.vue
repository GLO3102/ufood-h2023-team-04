<template>
  <div class="flex flex-col h-screen">
    <div
      class="h-24 w-full text-5xl py-2 flex flex-col justify-center items-center bg-blue-500"
    >
      <p class="text-3xl sm: lg :text-5xl font-serif">La belle et la boeuf</p>
    </div>
    <div class="flex flex-col sm:lg:flex-row h-screen">
      <div class="h-1/2 w-screen sm: lg:flex-col lg:w-1/2 h-full">
        <div
          class="bg-blue-500 h-1/2 flex flex-col justify-center items-center box-border lg:"
        >
          <div class="text-xs flex flex-col justify-center items-center">
            <p class="">Adresse : 2450 Bd Laurier, Québec, QC G1V 2L1</p>
            <p class="">Téléphone &nbsp; : (581) 742-5444</p>
            <p class="underline underline-offset-1">Horaire</p>
            <p class="">Samedi &emsp;&nbsp; :&emsp; 11h30-0h00</p>
            <p class="">Dimanche &nbsp;: &emsp; 11h30-0h00</p>
            <p class="">Lundi &emsp; : &emsp; 11h30-0h00</p>
            <p class="">Mardi : &emsp; 11h30-0h00</p>
            <p class="">Mercredi :&emsp; 11h30-0h00</p>
            <p class="">Jeudi : &emsp;11h30-0h00</p>
            <p class="">Vendredi :&emsp; 11h30-0h00</p>
          </div>
          <div class="justify-self-end py-8">
            <button
              class="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Site du restaurant
            </button>
          </div>
        </div>
        <div class="bg-blue-900 h-1/2">
          <div class="justify-center items-center h-full w-full">
            <iframe
              class="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10930.563052556623!2d-71.2801835!3d46.771977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf8c41c7d41b0a7e!2sLa%20Belle%20et%20La%20B%C5%93uf!5e0!3m2!1sfr!2sca!4v1674599572955!5m2!1sfr!2sca"
              width="720"
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="w-screen sm: lg :flex-col lg:w-1/2 h-full">
        <div class="bg-red-900 h-1/2">
          <img
            class="w-full h-full"
            src="https://ssmscdn.yp.ca/image/resize/f21c276a-a02c-495c-bbd0-3cb5f146f3bf/ypui-d-mp-pic-gal-lg/la-belle-la-boeuf-burger-bar-laurier-devantdemagasin-6.jpg"
          />
        </div>
        <div class="bg-red-500 h-1/2">div2 deuxieme div</div>
      </div>
    </div>
  </div>
</template>

<style></style>
