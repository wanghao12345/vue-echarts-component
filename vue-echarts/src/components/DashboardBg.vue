<template lang="pug">
  .dashboard-bg
    .dashboard-bg-box
      .line-box(class="line1 line-horn1 line-len")
      .line-box(class="line2 line-horn1 line-hei")
      .line-box(class="line3 line-horn2 line-len")
      .line-box(class="line4 line-horn2 line-hei")
      .line-box(class="line5 line-horn3 line-len")
      .line-box(class="line6 line-horn3 line-hei")
      .line-box(class="line7 line-horn4 line-len")
      .line-box(class="line8 line-horn4 line-hei")
      slot(name="dashboardCont")
</template>

<script>
  export default {
    name: "DashboardBg"
  }
</script>

<style lang="sass" scoped>
  .dashboard-bg
    width: 100%
    height: 100%
    box-sizing: border-box
    padding: 10px
    .dashboard-bg-box
      width: 100%
      height: 100%
      border: 1px solid #46baef
      box-shadow: 0 0 10px #46baef
      position: relative
      .line-box
        background-color: #dce7f1
        box-shadow: 0 0 10px #dce7f1
        position: absolute
      .line-len
        width: 20px
        height: 4px
      .line-hei
        width: 4px
        height: 20px
      .line-horn1
        top: -2px
        left: -2px
      .line-horn2
        top: -2px
        right: -2px
      .line-horn3
        bottom: -2px
        left: -2px
      .line-horn4
        bottom: -2px
        right: -2px
</style>
