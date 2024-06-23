<script setup>
import Answer from "@/components/QuestionViewElements/AnswerBlockViewElements/Answer.vue";
import PartyCollection from "@/components/QuestionViewElements/AnswerBlockViewElements/PartyCollection.vue";
import {watch} from "vue";
const props=defineProps({
  answers: {
    required: true
  },
  checkPressed:{
    type: Boolean,
    required:true
  }
})
watch(() => props.checkPressed, (newValue, oldValue) => {
  console.log("Pressed2")
})

</script>

<template>
  <div class="answer-view-container">
    <div class="answers-container">
      <Answer
          v-for="(message,index) in answers"
          :key="index"
          :answer-text="message.answer"
          :checkPressed="checkPressed"
          :true-label="message.logo"
      />
    </div>
    <div class="party-container">
      <PartyCollection/>
    </div>

  </div>

</template>

<style scoped>
.answer-view-container{
  display: flex;
}

.answers-container {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.party-container {
  width: 25%;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: gray;
}
.answerBox{
  flex: 0 1 calc(30% - 10px);
  box-sizing: border-box;
  margin: 5px;
}
</style>