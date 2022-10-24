<template>
  <div class="home-screen">
    <img class="home-screen__logo" src="@/assets/images/logo.png"/>
    <img class="home-screen__banner" src="@/assets/images/banner.png"/>
    <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe">
      <Button>ИГРАТЬ СЕЙЧАС</Button>
    </a>
    <MouseScrollIcon/>
  </div>
</template>

<script setup>

import Button from "../atoms/Button";
import MouseScrollIcon from "../atoms/MouseScrollIcon";
</script>

<style lang="scss">
.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  height: 100vh;

  padding: 40px;

  background-image: url("@/assets/images/backgrounds/screen1.png");
  background-size: cover;

  &__logo {
    width: 400px;
  }

  &__banner {

  }
}
</style>