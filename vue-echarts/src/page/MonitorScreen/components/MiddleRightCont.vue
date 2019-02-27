<template lang="pug">
  DashboardBg()
    .right-content(slot="dashboardCont")
      .mark-subject
        .subject-title
          DashboardTitle(
          :dashboardTitle="dashboardTitle1"
          class="dashboard-title"
          )
        .subject-content

      .credit-trend
        .trend-title
          DashboardTitle(
          :dashboardTitle="dashboardTitle2"
          class="dashboard-title"
          )
        .trend-content
</template>

<script>
  import DashboardBg from '../../../components/DashboardBg'
  import DashboardTitle from '../../../components/DashboardTitle'
  export default {
    name: "MiddleRightCont",
    components: {
      DashboardBg,
      DashboardTitle
    },
    data () {
      return {
        dashboardTitle1: '市场主体信用分布',
        dashboardTitle2: '主题信用升降趋势'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .right-content
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    .mark-subject
      flex: 1
      display: flex
      flex-direction: column
      .subject-content
        width: 100%
        flex: 1
    .credit-trend
      flex: 1
      display: flex
      flex-direction: column
      .trend-content
        width: 100%
        flex: 1
    .dashboard-title
      margin: 10px
      display: inline-block
</style>
