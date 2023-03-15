Pour créer un bouton contenant une liste de noms en Vue 3 composition, vous
pouvez suivre les étapes suivantes : Créer un composant Vue qui contiendra votre
bouton et la liste de noms. javascript

<template>
  <div>
    <button @click="showList = !showList">
      {{ selectedName || "Choisir un nom" }}
    </button>
    <ul v-show="showList">
      <li v-for="name in names" :key="name" @click="selectName(name)">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

Dans la section
<script>
 du composant, définissez les propriétés names, selectedName, et showList.

javascript

<script>
export default {
  name: 'NameListButton',
  props: {
    initialSelectedName: {
      type: String,
      default: null,
    },
    names: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const showList = ref(false);
    const selectedName = ref(props.initialSelectedName);
    const selectName = (name) => {
      selectedName.value = name;
      showList.value = false;
    };
    return {
      showList,
      selectedName,
      selectName,
    };
  },
};
</script>

Utilisez le composant dans un autre composant Vue et passez les noms que vous
souhaitez afficher et la variable à mettre à jour avec le nom sélectionné.
javascript

<template>
  <div>
    <p>Le nom sélectionné est : {{ selectedName }}</p>
    <NameListButton
      :names="['Jean', 'Pierre', 'Jacques']"
      :initialSelectedName="selectedName"
      @nameSelected="selectedName = $event"
    />
  </div>
</template>

<script>
import NameListButton from "./NameListButton.vue";
export default {
  name: "MyComponent",
  components: {
    NameListButton,
  },
  data() {
    return {
      selectedName: null,
    };
  },
  methods: {
    onNameSelected(name) {
      this.selectedName = name;
    },
  },
};
</script>

Dans le composant NameListButton, ajoutez une émission de l'événement
nameSelected lorsque le nom est sélectionné. javascript const selectName =
(name) => { selectedName.value = name; showList.value = false;
emit('nameSelected', name); }; Cela permettra de mettre à jour la variable
selectedName dans le composant parent lorsque le nom est sélectionné dans le
bouton contenant la liste de noms.
