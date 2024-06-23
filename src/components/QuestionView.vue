<script setup>
import Header from "@/components/QuestionViewElements/Header.vue";
import AnswerBlock from "@/components/QuestionViewElements/AnswerBlock.vue";
import {loadQuestions} from "@/utils/loadData.js";
import {ref, watch} from "vue";
var checkPressed=ref(false)
const questions= loadQuestions()
var questionCounter=0

const handleCheckPressed=(value)=>{
  console.log("Pressed")
  checkPressed.value=value
  if (value===false){
    questionCounter=(questionCounter+1)%questions.length
  }


}

</script>

<template>
  <div class="FullView">
    <Header :question-text=questions[questionCounter].question @update-check-pressed="handleCheckPressed"/>
    <AnswerBlock :answers=questions[questionCounter].answers :check-pressed/>
    <div>
      <i>Disclaimer:

      Zur Landtagswahl 2024 treten mehr als die hier aufgeführten Parteien an. Die Auswahl der aufgeführten Parteien ist auf Basis der Wählerstimmen aus der Europawahl 2019 und der Kooperationsbereitschaft der Parteien entstanden.

      Die in dieser Anwendung zum aktuellen Stand (23.06.24) verarbeiteten Angaben stammen aus dem Wahlkampf der Europawahl 2024. Es ist zu beachten, dass sowohl Fragen als auch Strategien/Positionen der Parteien in verkürzter Fassung dargestellt werden. Die ausführlichen Parteiprogramme sind den einzelnen Parteien zu entnehmen. Die AutorInnen erheben keinen Anspruch auf inhaltliche Vollständigkeit.</i>
    </div>
  </div>
</template>

<style scoped>
.FullView{
  width: 100%;
}
</style>