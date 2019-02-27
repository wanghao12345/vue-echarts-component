<template lang="pug">
  span.dashboard-title {{dashboardTitle}}
    .line-box(class="line1 line-horn1 line-len")
    .line-box(class="line2 line-horn1 line-hei")
    .line-box(class="line3 line-horn2 line-len")
    .line-box(class="line4 line-horn2 line-hei")
    .line-box(class="line5 line-horn3 line-len")
    .line-box(class="line6 line-horn3 line-hei")
    .line-box(class="line7 line-horn4 line-len")
    .line-box(class="line8 line-horn4 line-hei")
</template>

<script>
  export default {
    name: "DashboardTitle",
    props:['dashboardTitle']
  }
</script>

<style lang="sass" scoped>
  .dashboard-title
    border: 1px solid #0fb0f9
    padding: 2px 10px
    font-size: 14px
    color: white
    position: relative
    .line-box
      background-color: #e0e0e0
      box-shadow: 0 0 10px #e0e0e0
      position: absolute
    .line-len
      width: 20px
      height: 2px
    .line-hei
      width: 2px
      height: 10px
    .line-horn1
      top: -1px
      left: -1px
    .line-horn2
      top: -1px
      right: -1px
    .line-horn3
      bottom: -1px
      left: -1px
    .line-horn4
      bottom: -1px
      right: -1px
</style>
