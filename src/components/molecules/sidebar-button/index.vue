<template>
  <nuxt-link
    :class="['sidebar-button', $route.path === button.path ? 'active' : '']"
    :to="button.path"
  >
    <img :src="logoImage" alt="лого" class="sidebar-button__icon" />
    <span class="sidebar-menu__label"> {{ button.label }} </span>
  </nuxt-link>
</template>

<script>
export default {
  name: "SidebarButton",
  components: {},
  props: {
    button: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    logoImage() {
      return require(`~/assets/icons/${this.button.linkImg}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-button {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  padding: 14px 0px 14px 24px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  background-color: #2e3138;
  color: #ffffff;
  &__icon {
    margin-right: 14px;
  }
}

.active {
  box-shadow: 1px 1px 0px rgba(107, 102, 126, 0.49),
    inset 3px 3px 5px rgba(8, 7, 13, 0.25);
  border-radius: 0px 16px 16px 0px;
}
</style>
