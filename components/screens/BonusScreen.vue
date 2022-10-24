<template>
  <div class="bonus-screen">
    <div class="bonus-screen__section">
      <h2 class="bonus-screen__title">Бонусы для всех игроков</h2>
      <hr class="bonus-screen__divider"/>
      <img class="bonus-screen__crown" src="@/assets/images/crown.png"/>
      <p class="bonus-screen__name">Премиум аккаунт на 14 дней!</p>
      <p class="bonus-screen__enter-promo">вводи ПРОМОКОД</p>
      <p class="bonus-screen__promo">RUBLEVKA</p>
      <div class="premium-features">
        <p class="premium-features__title">преимущества премиум аккаунта:</p>
        <div class="premium-features__sections">

          <div class="premium-features__section">
            <div class="premium-feature">
              <p class="premium-feature__value">X2</p>
              <p class="premium-feature__title">
                Опыт на всех <br>
                работах
              </p>
            </div>
            <div class="premium-feature">
              <p class="premium-feature__value">X2</p>
              <p class="premium-feature__title">
                Опыт в бандах <br>
                и фракциях
              </p>
            </div>
            <div class="premium-feature">
              <p class="premium-feature__value">X1.5</p>
              <p class="premium-feature__title">
                Зарплата <br>
                во фракциях
              </p>
            </div>
          </div>
          <div class="premium-features__section">
            <div class="premium-feature">
              <p class="premium-feature__value">+20%</p>
              <p class="premium-feature__title">
                К зарплате <br>
                на всех работах
              </p>
            </div>
            <div class="premium-feature">
              <p class="premium-feature__value">special</p>
              <p class="premium-feature__title">
                Специальные <br>
                ежедневные награды
              </p>
            </div>
          </div>
          <div class="premium-features__section">
            <div class="premium-feature">
              <p class="premium-feature__value">+14</p>
              <p class="premium-feature__title">
                других бонусов <br>
                и возможностей!
              </p>
            </div>
          </div>
        </div>
      </div>
      <HowToUsePromo/>
    </div>
    <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe">
      <Button>Играть сейчас!</Button>
    </a>
  </div>
</template>

<script setup>
import HowToUsePromo from "../atoms/HowToUsePromo";
import Button from "../atoms/Button";
</script>

<style lang="scss" scoped>
.bonus-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 80px;

  background-image: linear-gradient(transparent 0%, transparent 80%, black 100%), url("@/assets/images/backgrounds/screen5.png");
  background-size: cover;
  background-position: top center;

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin-bottom: 20px;

    color: white;

    font-weight: 700;
    font-size: 28px;
    line-height: 137.88%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__divider {
    margin-bottom: 20px;

    width: 200px;
  }

  &__crown {
    margin-bottom: 20px;

    width: 100px;
  }

  &__name {
    margin-bottom: 20px;

    color: white;

    font-weight: 700;
    font-size: 16px;
    line-height: 137.9%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__enter-promo {
    margin-bottom: 15px;

    color: white;

    font-weight: 600;
    font-size: 14px;
    line-height: 137.88%;
    text-align: center;
    text-transform: uppercase;
  }

  &__promo {
    margin-bottom: 35px;
    padding: 14px;

    color: white;

    font-weight: 600;
    font-size: 28px;
    line-height: 87.5%;
    text-align: center;

    border: 2px dashed #FF5C00;
  }
}

.premium-features {
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;

  color: white;

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 137.9%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__sections {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__section {
    display: flex;
    justify-content: center;
    gap: 100px;
  }
}

.premium-feature {
  &__value {
    font-family: 'Oxanium';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 137.88%;

    text-align: center;
    text-transform: uppercase;

    color: #FFD771;
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 137.88%;
    text-align: center;
  }
}
</style>
