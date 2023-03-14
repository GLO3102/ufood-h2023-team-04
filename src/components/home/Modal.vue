<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal-overlay">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-container">
          <div class="modal-header">
            <h2 class="modal-title">Nom du restaurant</h2>
            <button class="modal-close" @click="close">×</button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <input
                type="date"
                name=""
                id=""
                class="block w-full rounded-md border-black border bg-white mt-2 p-2"
              />
              <textarea
                placeholder="Add a comment"
                class="block w-full rounded-md border-black border bg-white mt-2 p-2"
              ></textarea>
              <select
                name=""
                id=""
                class="block w-full rounded-md border-black border bg-white mt-2 p-2"
              >
                <option value="choose-rating">Choose rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <slot />
          </div>
          <div class="modal-footer">
            <button
              class="modal-button modal-button-primary"
              @click="submitReview"
            >
              Save
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-container {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.modal-title {
  margin: 0;
  font-size: 1.5rem;
}
.modal-close {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
.modal-body {
  padding: 1rem;
  flex: 1;
}
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid #ccc;
}
.modal-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.modal-button-primary {
  background-color: #007bff;
  color: #fff;
}
.modal-animation-enter-active,
.modal-animation-leave-active,
.modal-animation-inner-enter-active,
.modal-animation-inner-leave-active {
  transition: opacity 0.3s ease;
}
.modal-animation-enter,
.modal-animation-leave-to,
.modal-animation-inner-enter,
.modal-animation-inner-leave-to {
  opacity: 0;
}
</style>

<script>
import { postReview } from "../../api/restaurantsAPI";
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const submitReview = async () => {
      const review = {
        restaurant_id: "",
        comment: "",
        rating: "",
        date: "",
      };
      emit("close");
    };
    return { close, submitReview };
  },
};
</script>
