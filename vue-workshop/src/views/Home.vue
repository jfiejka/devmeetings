<template>
  <div class="home">
    <p>HOME VIEW</p>
    <BaseButton :loading="loading" text="Mój button" @click.native="change"> Dupa </BaseButton>
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
    change() {
      this.loading = !this.loading 
    }
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>
