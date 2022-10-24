<template>
  <div class="slider">
    <div class="slider__image-container">
      <div class="slider__button-container">
        <img
            class="slider__button slider__button_type_prev"
            src="@/assets/images/icons/arrow.svg"
            @click="showPrevious"
        />
      </div>
      <transition :name="transitionName" mode="out-in">
        <slot :name="currentContentIndex"/>
      </transition>
      <div class="slider__button-container">
        <img
            class="slider__button slider__button_type_next"
            src="@/assets/images/icons/arrow.svg"
            @click="showNext"
        />
      </div>
    </div>
    <div class="slider__points">
      <div
          v-for="(value, index) in contentLength"
          class="slider__point"
          :class="{
          'slider__point_active': currentContentIndex == index,
        }"
          :key="index"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  contentLength: Number,
})

const currentContentIndex = ref(0);
const transitionName = ref(0);

function showPrevious() {
  transitionName.value = "slide-right";
  currentContentIndex.value--;
  if (currentContentIndex.value < 0)
    currentContentIndex.value = props.contentLength - 1;
};

function showNext() {
  transitionName.value = "slide-left";
  currentContentIndex.value++;
  if (currentContentIndex.value >= props.contentLength)
    currentContentIndex.value = 0;
};
</script>

<style lang="scss">
.slider {
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;

  width: 100%;
}

.slider__image-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  flex-grow: 1;
}

.slider__image {
  height: 100%;
}

.slider__button-container {
  position: relative;
  z-index: 1;

  width: 20px;
  flex-shrink: 0;
}

.slider__button {
  transition: width 100ms ease-in;
  width: 90%;

  &:hover {
    width: 100%;
  }
}

.slider__button_type_next {
  transform: scaleX(-1);
}

.slider__points {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.slider__point {
  width: 10px;
  height: 10px;

  border-radius: 100%;
  background-color: #8c8c8c;
}

.slider__point_active {
  background-color: #3c4bcf;
}
</style>
