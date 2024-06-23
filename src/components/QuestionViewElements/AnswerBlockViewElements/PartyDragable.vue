

<script>
export default {
  props: {
    svgPath: {
      required: true
    },
    party: {
      required: true
    }
  },
  methods:{
    startDrag(evt,name,party){
      console.log(name)
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('svgPath', name)
      evt.dataTransfer.setData('party', party)
      console.log(name,party)
    }
  }
}

</script>

<template>
  <div
      class="LogoBox"
      draggable="true"
      @dragstart="startDrag($event,svgPath,party)"
  >
    <img :src="svgPath" class="LogoSVG"  alt="SVG"/>
  </div>
</template>

<style scoped>
.LogoBox{
  border-style: solid;
  border-width: 1px;
  border-color: black;

}
.LogoSVG{width: 100%}
/* Add any component-specific styles here */
</style>