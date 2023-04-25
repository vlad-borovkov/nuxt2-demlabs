<template>
  <label :for="id" class="rf-radio">
    <input
      :id="id"
      v-model="model"
      :value="value"
      :name="name"
      :disabled="disabled"
      type="radio"
      class="rf-radio__field"
    />
    <span class="rf-radio__indicator"></span>
    <span class="rf-radio__message"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "RadioButton",
  model: {
    event: "change",
    prop: "value",
  },
  props: {
    id: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [String, Number, Boolean],
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.rf-radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__message {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  span.rf-radio__indicator {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    margin-right: 16px;
    background: linear-gradient(90deg, #7930de 0%, #7f65ff 100%);
    box-shadow: 2px 2px 5px rgba(31, 36, 47, 0.5),
      inset 1px 1px 2px rgba(8, 7, 13, 0.24);
    &::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      background-color: #363a42;
      border-radius: 50%;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.rf-radio__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.rf-radio__indicator {
      background: linear-gradient(180deg, #d6d6d6, #b3b3b3);
      &::before {
        background-color: #6f6f6f;
        box-shadow: 2px 2px 5px rgba(8, 7, 13, 0.42),
          inset 1px 1px 3px rgba(77, 85, 99, 0.52);
      }
    }
    &:disabled ~ span {
      color: #2d3037;
    }
  }
}
</style>
