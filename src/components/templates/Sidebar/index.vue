<template>
  <div class="sidebar">
    <img src="@/assets/images/logo.svg" alt="лого" class="sidebar__logo" />
    <nav class="sidebar-menu">
      <SidebarButton
        v-for="button in menuButtons"
        :key="button.id"
        :button="button"
      />
    </nav>
  </div>
</template>

<script>
import SidebarButton from "@/components/molecules/sidebar-button/index.vue";

export default {
  name: "SideBar",
  components: { SidebarButton },
  data() {
    return {
      menuButtons: [
        {
          pathOption: { path: "/wallet" },
          linkImg: "wallet.svg",
          label: "Wallet",
          id: "1",
        },
        {
          pathOption: { path: "/dex" },
          linkImg: "dex.svg",
          label: "DEX",
          id: "2",
        },
        {
          pathOption: { path: "/txexplorer" },
          linkImg: "tx_explorer.svg",
          label: "TX explorer",
          id: "3",
        },
        {
          pathOption: {
            path: "/certificates",
          },
          linkImg: "certificats.svg",
          label: "Certificates",
          id: "4",
        },
        {
          pathOption: { path: "/tokens" },
          linkImg: "tokens.svg",
          label: "Tokens",
          id: "6",
        },
        {
          pathOption: { path: "/vpnclient" },
          linkImg: "vpn_client.svg",
          label: "VPN client",
          id: "7",
        },
        {
          pathOption: { path: "/vpnservice" },
          linkImg: "vpn_service.svg",
          label: "VPN service",
          id: "8",
        },
        {
          pathOption: { path: "/console" },
          linkImg: "console.svg",
          label: "Console",
          id: "9",
        },
        {
          pathOption: { path: "/logs" },
          linkImg: "logs.svg",
          label: "Logs",
          id: "10",
        },
        {
          pathOption: { path: "/settings" },
          linkImg: "settings.svg",
          label: "Settings",
          id: "11",
        },
        {
          pathOption: { path: "/dapps" },
          linkImg: "dapps.svg",
          label: "dApps",
          id: "12",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  grid-area: sidebar;
  background-color: #2e3138;
  border-radius: 0px 0px 16px 0px;
  box-shadow: inset 1px 1px 0px #524d64;
  filter: drop-shadow(5px 5px 10px rgba(8, 7, 13, 0.42));
  padding-right: 2px;

  &__logo {
    margin: 7px 0px 4px 11px;
  }

  &-menu {
    display: flex;
    flex-direction: column;
    padding-right: 7px;
  }
}
</style>
