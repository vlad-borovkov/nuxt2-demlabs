<template>
  <div class="layout-default">
    <SearchLine />
    <SideBar />
    <main>
      <Nuxt />
    </main>
    <BottomMenu />
  </div>
</template>

<script>
import SearchLine from "@/components/templates/Search/index.vue";
import SideBar from "@/components/templates/Sidebar/index.vue";
import BottomMenu from "@/components/templates/StatusBar/index.vue";

export default {
  name: "DefaultLayout",
  components: { SearchLine, SideBar, BottomMenu },
};
</script>

<style lang="scss" scoped>
.layout-default {
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: #2e3138;
  grid-template-columns: 14% 86%;
  grid-template-rows: 8% 84.5% 5.5%;
  grid-column-gap: 3px;
  grid-row-gap: 7px;
  grid-template-areas:
    "sidebar search"
    "sidebar main"
    "bottom-panel bottom-panel";
  > main {
    grid-area: main;
    flex: 1;
    overflow-x: auto;
  }
}
</style>
