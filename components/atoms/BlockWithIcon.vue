<template>
  <div class="block-container">
    <div class="block-container__icon-container" :class="{'block-container__icon-container_position_right': rightAlignment}">
      <img class="block-container__icon" :src="icon"/>
    </div>
    <p class="block-container__title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  rightAlignment: Boolean,
})
</script>

<style lang="scss">
.block-container {
  background: #272B31;
  border: 2px solid #606060;
  border-top: 12px solid #FF5C00;

  box-sizing: border-box;

  padding: 30px;

  position: relative;

  color: white;

  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  &__title {
    position: absolute;
    left: 0;
    top: 0;

    transform: translateY(-100%);

    box-sizing: border-box;
    width: 100%;

    padding: 15px 20px;
    padding-left: 50px;

    font-weight: 700;
    font-size: 20px;
    line-height: 137.88%;
    text-align: center;

    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}

.block-container__icon-container {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);

  height: 80px;
  width: 80px;

  border-radius: 100%;
  background-color: #FF5C00;

  box-shadow: 0px 4px 13px rgba(220, 79, 0, 0.5);

  &_position_right {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
}

.block-container__icon {
  width: 60%;
  max-height: 60%;
}
</style>