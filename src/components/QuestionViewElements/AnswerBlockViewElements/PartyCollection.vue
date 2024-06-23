<script setup>

import {loadLogos} from "@/utils/loadData.js";

const logos=loadLogos()
import PartyDragable from "@/components/QuestionViewElements/AnswerBlockViewElements/PartyDragable.vue";
import Answer from "@/components/QuestionViewElements/AnswerBlockViewElements/Answer.vue";
</script>

<template>
  <div class="LogoStore"
       @dragover.prevent
       @dragenter.prevent
  >

    <PartyDragable
        v-for="(logo,index) in logos"
        :key="index"
        :svg-path="logo.logo"
        :party="logo.party"
    />
  </div>

</template>

<style scoped>
.LogoBox{
  width: calc(50% - 4px);
  aspect-ratio: 1;
  margin: 2px;
}
.LogoStore{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}
</style>