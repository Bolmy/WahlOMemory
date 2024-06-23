<script setup>
var change=false
defineProps({
  questionText: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['updateCheckPressed']);

const click=()=>{
  change=!change
  emit('updateCheckPressed', change);
}
</script>

<template>
  <div class="Headline">
    <h1>{{ questionText }}</h1>
    <div>
      Score: {{ this.$store.state.count }}
      <button @click="click">
        Weiter
      </button>
    </div>

  </div>
</template>

<style scoped>
.Headline{
  display: flex;
}
</style>
