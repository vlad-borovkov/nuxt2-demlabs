<template>
  <form class="search" @submit.prevent>
    <input class="search__input" placeholder="Search" />
    <button class="search__button"></button>
  </form>
</template>

<script>
export default {
  name: "SearchLine",
  components: {},
};
</script>

<style lang="scss" scoped>
.search {
  grid-area: search;
  background-color: #2e3138;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-left: 36px;
  position: relative;
  border-radius: 0px 0px 0px 16px;
  box-shadow: inset 1px 1px 0px #524d64;
  filter: drop-shadow(5px 5px 10px rgba(8, 7, 13, 0.42));

  &__input {
    padding: 6px 50px 0 39px;
    width: 229px;
    height: 48px;
    background: transparent;
    border-bottom: 1px solid #393b41;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #757184;
  }
  &__input:focus-visible {
    outline: -webkit-focus-ring-color none;
  }
  &__button {
    position: absolute;
    top: 16px;
    left: 40px;
    width: 20px;
    height: 20px;
    background: url(@/assets/icons/search.svg);
    background-size: cover;
    border: none;
  }
}
</style>
