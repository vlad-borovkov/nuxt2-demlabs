<template>
  <nuxt-link class="status-bar-button" :to="button.path">
    <span class="status-bar-button__label"> {{ button.label }} </span>
    <svg width="8" height="8">
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#A9E81C"></stop>
          <stop offset="100%" stop-color="#8ECC00"></stop>
        </radialGradient>
      </defs>
      <circle cx="4" cy="4" r="4" fill="url(#gradient)"></circle>
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  name: "StatusBar",
  components: {},
  props: {
    button: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.status-bar-button {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #ffffff;

  &__label {
    margin-right: 8px;
  }
}
</style>
