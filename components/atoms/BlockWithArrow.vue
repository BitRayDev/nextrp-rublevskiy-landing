<template>
  <div class="block-with-arrow">
    <p class="block-with-arrow__section block-with-arrow__section_left">
        <slot name="left"/>
    </p>
    <img class="block-with-arrow__arrow" src="@/assets/images/arrow.svg"/>
    <p class="block-with-arrow__section block-with-arrow__section_right">
      <slot name="right"/>
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.block-with-arrow {
  display: flex;
  align-items: center;

  &__section {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 85px;

    box-sizing: border-box;
    padding: 20px;
    //margin-top: 12px;

    color: white;

    font-weight: 600;
    font-size: 14px;
    line-height: 137.88%;
    text-align: center;

    background: #313844;

    &_left {
      border-left: 8px solid #FF5C00;
    }

    &_right {
      border-right: 8px solid #FF5C00;
    }
  }

  &__arrow {
    height: 105px;

    //margin-top: 2px;
  }
}
</style>