<template>
  <nav class="status-bar">
    <BottomMenuButton
      v-for="button in bottomMenuButtons"
      :key="button.id"
      :button="button"
    />
  </nav>
</template>

<script>
import BottomMenuButton from "@/components/molecules/status-bar-button/index.vue";
export default {
  name: "StatusBar",
  components: { BottomMenuButton },
  data() {
    return {
      bottomMenuButtons: [
        {
          path: "/",
          label: "Cellnet",
          id: "1",
        },
        {
          path: "/",
          label: "Mainnet",
          id: "2",
        },
        {
          path: "/",
          label: "Somenet",
          id: "3",
        },
        {
          path: "/",
          label: "Testnet",
          id: "4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.status-bar {
  grid-area: bottom-panel;
  display: flex;
  flex-direction: row;
  box-shadow: 5px -5px 10px rgba(8, 7, 13, 0.42), inset 1px 1px 0px #524d64;
  justify-content: center;
  gap: 231px;
}
</style>
