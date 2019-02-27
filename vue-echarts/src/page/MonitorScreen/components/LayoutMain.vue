<template lang="pug">
  .layout-main
    .layout-top
      slot(name="topCont")
    .layout-middle
      .layout-middle-left
        slot(name="MiddleLeftCont")
      .layout-middle-content
        slot(name="MiddleContentCont")
      .layout-middle-right
        slot(name="MiddleRightCont")
    .layout-bottom
      .layout-bottom-left
        slot(name="BottomLeftCont")
      .layout-bottom-right
        slot(name="BottomRightCont")
</template>

<script>
  export default {
    name: "LayoutMain"
  }
</script>

<style scoped lang="sass">
  .layout-main
    width: 100%
    height: 100%
    display: flex
    display: -webkit-flex
    flex-direction: column
    .layout-top
      width: 100%
      height: 60px
    .layout-middle
      width: 100%
      min-height: 300px
      display: flex
      display: -webkit-flex
      flex: 1
      .layout-middle-left
        width: 300px
        height: 100%
      .layout-middle-content
        flex: 1
        height: 100%
      .layout-middle-right
        width: 300px
        height: 100%
    .layout-bottom
      width: 100%
      height: 200px
      display: flex
      display: -webkit-flex
      .layout-bottom-left
        width: 300px
      .layout-bottom-right
        flex: 1
</style>
