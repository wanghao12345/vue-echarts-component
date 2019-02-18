<template lang="pug">
  LayoutMain()
    .top-content(slot="topCont") topCont
    .middle-left(slot="MiddleLeftCont") MiddleLeftCont
    .middle-content(slot="MiddleContentCont") MiddleContentCont
    .middle-right(slot="MiddleRightCont") MiddleRightCont
    .bottom-left(slot="BottomLeftCont") BottomLeftCont
    .bottom-right(slot="BottomRightCont") BottomRightCont

</template>

<script>
  import LayoutMain from './components/LayoutMain'
  export default {
    name: "MonitorScreen",
    components: {
      LayoutMain
    }
  }
</script>

<style scoped>

</style>
