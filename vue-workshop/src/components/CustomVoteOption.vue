<template>
  <li>
    <input type="radio" name="option" />
    <span>{{ option.toUpperCase() }}</span>
  </li>
</template>
<script>
export default {
  name: "VoteOptions",
  props: {
    option: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped lang="scss">

</style>