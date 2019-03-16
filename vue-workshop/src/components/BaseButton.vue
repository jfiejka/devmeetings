<template>
  <button :disabled="isLoading">
    <span v-if="loading">Loading</span>
    <span v-else>
      <slot/>
    </span>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    isLoading: function() {
      return this.loading || this.$attrs.disabled;
    }
  }
};
</script>
<style scoped lang="scss">
</style>