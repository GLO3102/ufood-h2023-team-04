<template>
  <div>
    <div class="h-56 grid grid-cols-3 gap-4 content-start">Restaurants</div>
    <div class="flex items-start">
      <div class="py-4, text-6xl , text-red-600, w-80">
        La belle et la boeuf
        <div class="adresse">ceci est l'adresse</div>
      </div>
      <div class="py-12 , w-80">
        <img
          class="flex items-start"
          src="https://ssmscdn.yp.ca/image/resize/f21c276a-a02c-495c-bbd0-3cb5f146f3bf/ypui-d-mp-pic-gal-lg/la-belle-la-boeuf-burger-bar-laurier-devantdemagasin-6.jpg"
        />
      </div>
    </div>
  </div>
</template>

<style>
.DivResto {
  display: flex;
  flex-direction: row;
}
.Nom {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 50px;
}

.Image {
  display: flex;
  margin: 100px;
}

.adresse {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-family: "Times New Roman", Times, serif;
}
</style>
