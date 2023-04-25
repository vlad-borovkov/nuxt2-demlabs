<template>
  <li class="main-panel__item">{{ item.name }}</li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-panel__item {
  list-style: none;
  width: 646px;
  height: 50px;
  background: #363a42;
  border-bottom: 1px solid #2e3138;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
