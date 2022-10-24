<template>
  <div class="events-screen">
    <h2 class="events-screen__title">уникальные ивенты</h2>
    <video class="events-screen__video" src="@/assets/videos/gameplay.mp4" controls
           controlslist="nofullscreen nodownload noremoteplayback noplaybackrate foobar" disablepictureinpicture
           autoplay muted loop/>
    <div class="events-screen__features">
      <BlockWithIcon :icon="event.blockIcon" :title="event.blockTitle" :right-alignment="event.rightAlignment"
                     v-for="event in events">
        <div class="event">
          <p class="event__description">{{ event.shortDescription }}</p>
          <p class="event__title">{{ event.title }}</p>
          <ul class="event__list">
            <li class="event__list-item" v-for="item in event.items">
              {{ item }}
            </li>
          </ul>
        </div>
      </BlockWithIcon>
    </div>
    <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe">
      <Button>Играть сейчас</Button>
    </a>
  </div>
</template>

<script setup>
import targetIcon from "@/assets/images/icons/target.png";
import gunIcon from "@/assets/images/icons/gun.png";

import BlockWithIcon from "../atoms/BlockWithIcon";
import Button from "../atoms/Button";

const events = [
  {
    blockTitle: "Масштабные перестрелки по всей карте",
    blockIcon: targetIcon,
    shortDescription: "Присоединяйся к беспредельной мясорубке не на жизнь, а на смерть!",
    title: "Ивент «Судная ночь»",
    items: [
      "Минимум целый час на всем сервере не будет никаких правил, убивать можно где угодно и кого угодно!",
      "Самые лучшие киллеры получат приятные плюшки 😉"
    ]
  },
  {
    blockTitle: "столкновение фракций и кланов",
    blockIcon: gunIcon,
    shortDescription: "Вступай во фракцию или клан и прими участие в настоящей войне бандитов с законом! ",
    title: "Ивент «нападение на фракцию»",
    items: [
      "Захватывай вместе с друзьями полицейские участки, военную часть, мэрию и другие важные объекты!",
      "Во время мероприятия разрешены перестрелки в Зеленых Зонах и даже внутри интерьера!",
      "Победившая сторона получает вкусные бонусы в виде кланового прогресса и усиления оружия для фракций"
    ],
    rightAlignment: true,
  },
]
</script>

<style lang="scss">
.events-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  background-image: url("@/assets/images/backgrounds/screen2.png");
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

  &__video {
    width: 640px;
    border: 2px solid #8C8C8C;

    &::-webkit-media-controls-volume-slider {
      display: none;
    }

    &::-webkit-media-controls-mute-button {
      display: none;
    }

    &::-webkit-media-controls-fullscreen-button {
      display: none;
    }

    &::-webkit-media-controls-timeline {
      display: none;
    }

    &::-webkit-media-controls-current-time-display {
      display: none;
    }

    &::-webkit-media-controls-time-remaining-display {
      display: none;
    }
  }

  &__features {
    display: flex;
    gap: 90px;
  }
}

.event {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  width: 550px;

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  &__description {
    width: 75%;

    margin-bottom: 40px;


    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 15px;
  }

  &__list {
    text-align: start;
  }

  &__list-item {
    padding-left: 10px;
    margin-bottom: 10px;

    &::marker {
      content: "▬";
      color: #FF5C00;
    }
  }
}
</style>