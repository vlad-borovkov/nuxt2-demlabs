<template>
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    color: {
      type: String,
      default: "blue",
      validator: (value) => {
        return ["blue", "gray"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return [
        "button",
        {
          "button--blue": this.color === "blue",
          "button--gray": this.color === "gray",
        },
      ];
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border: none;

  padding: 6px 0 6px 0;
  cursor: pointer;
  user-select: none;
  outline: none;
  box-shadow: 2px 2px 7px rgba(11, 10, 13, 0.44), inset 1px 1px 4px #f1e7ff;
  border-radius: 30px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.button--blue {
  color: #fff;
  background: linear-gradient(230.15deg, #9580ff 0%, #a361ff 92.48%);
}

.button--gray {
  color: #fff;
  background: #b0aeb9;
}
</style>
