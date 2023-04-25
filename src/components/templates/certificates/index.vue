<template>
  <div class="main-panel">
    <div class="main-panel__display">
      <div class="main-panel__display-head">
        <h3 class="main-panel__display-head-title">Certificates</h3>
        <span class="main-panel__display-head-capture">Public</span>
      </div>
      <ul class="main-panel__list">
        <ListItem v-for="item in mockItems" :item="item" :key="item.id" />
      </ul>
    </div>

    <div class="main-panel__control">
      <div class="main-panel__control-filters">
        <div class="main-panel__control-filters-head">
          <h4 class="main-panel__control-filters-head-title">Filter</h4>
        </div>
        <div class="main-panel__control-filters-buttons">
          <RadioButton>Public certificates</RadioButton>
          <RadioButton>Private certificates</RadioButton>
          <RadioButton>Both</RadioButton>
        </div>
      </div>
      <div class="main-panel__control-actions">
        <div class="main-panel__control-actions-head">
          <h4 class="main-panel__control-actions-head-title">Actions</h4>
        </div>
        <ActionButton color="blue">Create certificate</ActionButton>
        <ActionButton color="blue">Import certificate</ActionButton>
        <ActionButton color="gray"
          >Export private certificate to public</ActionButton
        >
        <ActionButton color="gray">Export certificate to mempool</ActionButton>
        <ActionButton color="gray">Delete certificate</ActionButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/molecules/radio-button/index.vue";
import ActionButton from "@/components/molecules/action-button/index.vue";
import ListItem from "@/components/molecules/list-item/index.vue";

export default {
  name: "CertificatesTemplate",
  components: { ListItem, RadioButton, ActionButton },
  props: {
    mockItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.main-panel {
  display: grid;
  grid-template-columns: repeat(2, 70% 30%);
  width: 100%;
  height: 100%;
  padding: 24px 40px 24px 24px;

  &__display {
    width: 678px;
    height: 570px;
    background: #363a42;
    box-shadow: 1px 1px 0px rgba(107, 102, 126, 0.49),
      inset 3px 3px 5px rgba(8, 7, 13, 0.25);
    border-radius: 12px;
    overflow: hidden;

    &-head {
      &-title {
        font-family: "Quicksand";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        margin: 12px 0 12px 16px;
      }
      &-capture {
        font-family: "Quicksand";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #ffffff;
        background: #2e3138;
        display: block;
        min-width: 100%;
        padding: 8px 0 7px 16px;
      }
    }
  }
  &__control {
    margin-top: 7px;
    &-filters {
      margin-bottom: 40px;
      &-head {
        &-title {
          font-family: "Quicksand";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #ffffff;
          margin-bottom: 24px;
        }
      }
      &-buttons {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
    &-actions {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-head {
        &-title {
          font-family: "Quicksand";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #ffffff;
        }
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
