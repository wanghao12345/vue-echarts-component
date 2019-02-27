<template lang="pug">
  DashboardBg()
    .left-content(slot="dashboardCont")
      DashboardTitle(
        :dashboardTitle="dashboardTitle1"
        class="dashboard-title"
      )



</template>

<script>
  import DashboardBg from '../../../components/DashboardBg'
  import DashboardTitle from '../../../components/DashboardTitle'
  export default {
    name: "MiddleLeftCont",
    components: {
      DashboardBg,
      DashboardTitle
    },
    data () {
      return {
        dashboardTitle1: '部门办件完成情况'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .dashboard-title
    margin: 10px
    display: inline-block
</style>
