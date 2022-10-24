<template>
  <div class="how-to-use-promo">
    <div class="how-to-use-promo__instructions" v-if="isShown">
      <p>
        <b>01</b> Заходим в игру
      </p>
      <p>
        <b>02</b> Выбираем МАГАЗИН
      </p>
      <p>
        <b>03</b> Ищем поле ввода
      </p>
      <p>
        <b>04</b> Вводим промокод
      </p>
      <p>
        <b>05</b> Вы великолепны!
      </p>
    </div>
    <a class="how-to-use-promo__link" v-else @click="show">
      <img class="how-to-use-promo__icon" src="@/assets/images/icons/tap.svg" />
      Где и как вводить промокод?
    </a>
  </div>
</template>

<script>
export default {
  name: "HowToUsePromo",
  data: function () {
    return {
      isShown: false
    }
  },
  methods: {
    show: function () {
      this.isShown = true;
    },
  },
}
</script>

<style lang="scss" scoped>
.how-to-use-promo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 200px;

  &__link {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    white-space: nowrap;
    gap: 10px;

    color: white;

    font-weight: 600;
    font-size: 16px;
    line-height: 137.88%;
    text-align: center;
    text-decoration-line: underline;

    cursor: pointer;
  }

  &__icon {
    margin-right: 7px;
  }

  &__instructions {
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-weight: 400;
    font-size: 14px;
    line-height: 137.88%;
    letter-spacing: 0.05em;

    color: white;

    b {
      font-family: "Oxanium";
      color: #dd3232;
    }
  }
}
</style>
