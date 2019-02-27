<template lang="pug">
  .main-box
    .box-bg
      ScreenBg()
    .box-main
      LayoutMain()
        .top-content(slot="topCont")
          TopContent
        .middle-left(slot="MiddleLeftCont")
          MiddleLeftCont
        .middle-content(slot="MiddleContentCont")
        .middle-right(slot="MiddleRightCont")
          MiddleRightCont
        .bottom-left(slot="BottomLeftCont")
          BottomLeftCont
        .bottom-right(slot="BottomRightCont")
          BottomRightCont
</template>

<script>
  import ScreenBg from './components/ScreenBg'
  import LayoutMain from './components/LayoutMain'
  import TopContent from './components/TopContent'
  import MiddleLeftCont from './components/MiddleLeftCont'
  import MiddleRightCont from './components/MiddleRightCont'
  import BottomLeftCont from './components/BottomLeftCont'
  import BottomRightCont from './components/BottomRightCont'
  export default {
    name: "MonitorScreen",
    components: {
      LayoutMain,
      TopContent,
      ScreenBg,
      MiddleLeftCont,
      MiddleRightCont,
      BottomLeftCont,
      BottomRightCont
    }
  }
</script>

<style lang="sass" scoped>
  .main-box
    width: 100%
    height: 100%
    position: relative
    .box-bg
      width: 100%
      height: 100%
      overflow: hidden
    .box-main
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      div
        width: 100%
        height: 100%
      .middle-left
        box-sizing: border-box
        padding-left: 5px
      .middle-right
        box-sizing: border-box
        padding-right: 5px
      .bottom-left
        box-sizing: border-box
        padding-left: 5px
        padding-bottom: 5px
      .bottom-right
        box-sizing: border-box
        padding-right: 5px
        padding-bottom: 5px
</style>

