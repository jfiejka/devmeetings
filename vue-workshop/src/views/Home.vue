<template>
  <div class="home">
    <p>HOME VIEW</p>
    <BaseButton :loading="loading" text="Mój button" @click.native="change">Dupa</BaseButton>
    
    <VoteOptions/>

    <VoteOptions>
      <template #header>
        <h3>Custom header</h3>
      </template>
      <!--5/ 8. Or provide your own TodoList item and bind data by slotProps -->
       <template #optionLi="{ option }">
        <CustomVoteOption :option="option" />
      </template>
    </VoteOptions>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/BaseButton.vue";
import VoteOptions from "@/components/VoteOptions.vue";
import CustomVoteOption from "@/components/CustomVoteOption.vue";

export default {
  name: "home",
  components: {
    BaseButton,
    VoteOptions,
    CustomVoteOption
  },
  methods: {
    change() {
      this.loading = !this.loading;
    }
  },
  data() {
    return {
      loading: false,
    };
  }
};
</script>
