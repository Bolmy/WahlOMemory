<script setup>
import {ref, watch} from 'vue';

const props=defineProps({
  checkPressed: {
    type: Boolean,
    required:true
  },
})

const placeholderPath = ref(null);
const placeholderParty = ref(null);
const emit = defineEmits(['partyChanged']);
const onDrop=(evt)=> {
  placeholderPath.value= evt.dataTransfer.getData('svgPath')
  placeholderParty.value= evt.dataTransfer.getData('party')
  emit('party-changed', placeholderParty.value, placeholderPath.value);
}
const startDrag=(evt,name,party)=>{
  console.log(name)
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('svgPath', name)
  evt.dataTransfer.setData('party', party)
}
const onDragEnd = () => {
  placeholderPath.value = null;
  placeholderParty.value = null;
};

watch(() => props.checkPressed, (newValue, oldValue) => {
  if (newValue===false){
    placeholderPath.value = null;
    placeholderParty.value = null;
    emit('party-changed', placeholderParty.value, placeholderPath.value);
  }

})

const click=()=>{
  emit('updateCheckPressed', true);
}
</script>

<template>
  <div
      class="partySpot"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent

  >
    <img class="imagePos"
         v-if="placeholderPath"
         :src="placeholderPath"
         alt="Dropped SVG"
         draggable="true"
         @dragstart="startDrag($event,placeholderPath,placeholderParty)"
         @dragend="onDragEnd"
    />
  </div>
</template>

<style scoped>
.partySpot{
  background-color: lightgray;
  width: 100%;
  aspect-ratio: 2;
}
.imagePos{
  width: 100%;
}
</style>