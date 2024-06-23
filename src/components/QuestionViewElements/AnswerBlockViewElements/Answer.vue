<script setup>
import PartySpot from "@/components/QuestionViewElements/AnswerBlockViewElements/PartySpot.vue";
import {ref, watch} from "vue";
import { useStore } from 'vuex';

const backgroundColor=ref('white')

const props=defineProps({
  answerText: {
    type: String,
    required: true
  },
  checkPressed: {
    type: Boolean,
    required:true
  },
  trueLabel:{
    required: true
  }
})

var currentLogo=null
var currentParty=null

const store = useStore();
watch(() => props.checkPressed, (newValue, oldValue) => {
  if (newValue===true){
    console.log(props.trueLabel.party)
    if (currentParty!=null){
      if (currentParty===props.trueLabel.party){
        store.commit('increment')
        backgroundColor.value='green'
        return
      }
    }
    backgroundColor.value='red'
  }
  if (newValue===false){
    backgroundColor.value='white'
  }

})

const onPartyChanged=(newParty,newLogo)=>{
  console.log("onPartyChanged:",newParty)
  currentLogo=newLogo
  currentParty=newParty
}

</script>

<template>
  <div class="answerBox" :style="{backgroundColor:backgroundColor}">
    {{answerText}}
    <PartySpot @party-changed="onPartyChanged" :checkPressed="checkPressed"/>
  </div>
</template>

<style scoped>
.answerBox{
  margin: 5px;
  padding: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}
</style>