<template>
  <div class="map-screen">
    <h2 class="map-screen__title">уникальные ивенты</h2>
    <!--    <img class="map-screen__map" src="@/assets/images/map.svg"/>-->
    <Map/>
    <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe">
      <Button>Играть сейчас</Button>
    </a>
  </div>
</template>

<script setup>
import Map from "@/assets/images/map.svg?component";
import Button from "../atoms/Button";
</script>

<style lang="scss">
.map-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  background-image: url("@/assets/images/backgrounds/screen4.png");
  background-size: cover;

  padding: 50px;

  &__title {
    padding: 10px 30px;

    color: white;

    font-family: 'Furore';
    font-weight: 400;
    font-size: 36px;
    line-height: 137.88%;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    border-bottom: 8px solid #FF5C00;
  }
}
</style>