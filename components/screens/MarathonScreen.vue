<template>
  <div class="marathon-screen">
    <h2 class="marathon-screen__title">марафон испытаний</h2>
    <BlockWithArrow>
      <template #left>
        Первый месяц от старта сервера <br>
        будут идти специальные испытания
      </template>
      <template #right>
        Прими в них участие и получи <br>
        награды по окончанию марафона!
      </template>
    </BlockWithArrow>
    <Slider class="marathon-screen__slider" :content-length="2">
      <template #0>
        <div class="marathon-features marathon-features_type_personal">
          <p class="marathon-features__title">личный марафон</p>
          <div class="marathon-features__grid">
            <div class="marathon-features__feature marathon-feature marathon-feature_type_best-weapon">
              <p class="marathon-feature__title">
                Все игроки с максимальным <br>
                улучшением оружия:
              </p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  <span class="marathon-feature__highlighted-text">200</span> жетонов оружия <br>
                  + 2 инструмента защиты <br>
                  + 1 катализатор <br>
                  + 3 кейса со скинами оружия <br>
                </li>
              </ul>
            </div>
            <div class="marathon-features__feature marathon-feature marathon-feature_type_best-property">
              <p class="marathon-feature__title">топ игроки по имуществу:</p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  ТОП 1: уникальный номер на выбор <br>
                  + <span class="marathon-feature__highlighted-text">5х</span> кейс Сотка
                </li>
                <li class="marathon-feature__list-item">
                  ТОП 2: <span class="marathon-feature__highlighted-text">3х</span> кейс Сотка
                </li>
                <li class="marathon-feature__list-item">
                  ТОП 3: <span class="marathon-feature__highlighted-text">2х</span> кейс Сотка
                </li>
              </ul>
            </div>
            <div class="marathon-features__feature marathon-feature marathon-feature_type_first-leader">
              <p class="marathon-feature__title">первый лидер на посту:</p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  <span class="marathon-feature__highlighted-text">3к</span> рублей на игровой кошелек <br>
                  + кейс Сотка <br>
                  + <span class="marathon-feature__highlighted-text">10</span> дорогих кейсов с жетонами <br>
                </li>
              </ul>
            </div>
            <div class="marathon-features__feature marathon-feature marathon-feature_type_royal-battle-champion">
              <p class="marathon-feature__title">чемпион королевской битвы:</p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  уникальный номер БОЕЦ <br>
                  + <span class="marathon-feature__highlighted-text">2к</span> рублей на игровой кошелек
                </li>
              </ul>
            </div>
          </div>
          <img class="marathon-features__illustration marathon-features__illustration_type_cashbag"
               src="@/assets/images/cashbag.png"/>
          <img class="marathon-features__illustration marathon-features__illustration_type_hundred-case"
               src="@/assets/images/100-case.png"/>
        </div>
      </template>
      <template #1>
        <div class="marathon-features marathon-features_type_global">
          <p class="marathon-features__title">глобальный марафон</p>
          <div class="marathon-features__grid">
            <div class="marathon-features__feature marathon-feature marathon-feature_type_cartel-battle-winner">
              <p class="marathon-feature__title">
                победители в битве за картель:
              </p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  <span class="marathon-feature__highlighted-text">500</span> рублей на игровой кошелек <br>
                  + <span class="marathon-feature__highlighted-text">100</span> оружейных инструментов <br>
                  + <span class="marathon-feature__highlighted-text">5</span> инструментов сейва оружия <br>
                  + <span class="marathon-feature__highlighted-text">5</span> оружейных премиум кейсов <br>
                </li>
              </ul>
            </div>
            <div class="marathon-features__feature marathon-feature marathon-feature_type_marathon-final-winner">
              <p class="marathon-feature__title">победители финала марафона:</p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  ПОБЕДА КЛАНА: <span class="marathon-feature__highlighted-text">1000</span> рублей на игровой <br>
                  кошелек каждому игроку <br>
                  + клановые номера <br>
                  + уникальное граффити <br>
                  + временное название клана рядом <br>
                  с названием сервера <br>
                </li>
                <li class="marathon-feature__list-item">
                  ПОБЕДА ФРАКЦИИ: <span class="marathon-feature__highlighted-text">1000</span> рублей на игровой <br>
                  кошелек каждому принявшему участие <br>
                  + уникальные номера с названием фракции <br>
                </li>
              </ul>
            </div>
            <div class="marathon-features__feature marathon-feature marathon-feature_type_clan-battle-winner">
              <p class="marathon-feature__title">
                победители в битве за топ 1 клан:
              </p>
              <ul class="marathon-feature__list">
                <li class="marathon-feature__list-item">
                  <span class="marathon-feature__highlighted-text">500</span> рублей на игровой кошелек <br>
                  + <span class="marathon-feature__highlighted-text">200</span> оружейных инструментов <br>
                  + <span class="marathon-feature__highlighted-text">10</span> инструментов сейва оружия <br>
                </li>
              </ul>
            </div>
          </div>
          <img class="marathon-features__illustration marathon-features__illustration_type_golden-safe"
               src="@/assets/images/golden-safe.png"/>
          <img class="marathon-features__illustration marathon-features__illustration_type_golden-case"
               src="@/assets/images/golden-case.png"/>
        </div>
      </template>
    </Slider>
    <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe">
      <Button>Играть сейчас</Button>
    </a>
  </div>
</template>

<script setup>

import BlockWithArrow from "../atoms/BlockWithArrow";
import Button from "../atoms/Button";
</script>

<style lang="scss">
.marathon-screen {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("@/assets/images/backgrounds/screen3.png");
  background-size: cover;

  padding: 50px;

  overflow: hidden;

  &__title {
    margin-bottom: 40px;

    color: #FFFFFF;

    font-family: 'Furore';
    font-weight: 400;
    font-size: 36px;
    line-height: 137.88%;

    text-align: center;
    text-transform: uppercase;
  }

  &__slider {
    width: 1000px;
    height: 600px;

    margin-bottom: 50px;
  }
}

.marathon-features {
  color: white;

  position: relative;

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 137.88%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    gap: 5px;
  }

  &_type {
    &_personal {
      .marathon-features__grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content 50px min-content;
      }
    }

    &_global {
      .marathon-features__grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content min-content;
      }
    }
  }

  &__illustration {
    position: absolute;

    &_type {
      &_cashbag {
        left: -100px;
        bottom: -80px;
      }

      &_hundred-case {
        right: -270px;
        bottom: -120px;
      }

      &_golden-safe {
        left: -200px;
        bottom: -140px;
      }

      &_golden-case {
        right: -120px;
        bottom: -130px;
      }
    }
  }
}

.marathon-feature {
  color: white;
  background: #313844;

  padding: 35px;

  font-weight: 600;
  font-size: 14px;
  line-height: 137.9%;

  position: relative;

  &__title {
    margin-bottom: 15px;

    font-weight: 600;
    font-size: 16px;
    line-height: 137.88%;
    text-align: center;
    text-transform: uppercase;
  }

  &__list {

  }

  &__highlighted-text {
    color: #FFD771;

    font-weight: 700;
  }

  &__list-item {
    padding-left: 10px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &::marker {
      content: "▶";
    }
  }

  &_type {
    &_best-weapon {
      grid-area: 1 / 1 / 2 / 2;
    }

    &_best-property {
      grid-area: 1 / 2 / 3 / 3;
    }

    &_first-leader {
      grid-area: 2 / 1 / 4 / 2;
    }

    &_marathon-final-winner {
      grid-area: 1 / 2 / 3 / 3;
    }
  }
}
</style>