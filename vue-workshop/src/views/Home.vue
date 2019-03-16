<template>
  <div class="home">
    <p>HOME VIEW</p>
    <BaseButton :loading="loading" text="Mój button"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "home",
  components: {
    BaseButton
  },
  methods: {
    log() {
      console.log(this.$attrs);
    }
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>
