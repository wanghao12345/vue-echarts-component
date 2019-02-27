<template lang="pug">
  DashboardBg()
    .left-content(slot="dashboardCont")
      .department-handle
        .handle-title
          DashboardTitle(
            :dashboardTitle="dashboardTitle1"
            class="dashboard-title"
          )
        .handle-content
          DepartmentHandle
      .department-check
        .check-title
          DashboardTitle(
          :dashboardTitle="dashboardTitle2"
          class="dashboard-title"
          )
        .check-content

</template>

<script>
  import DashboardBg from '../../../components/DashboardBg'
  import DashboardTitle from '../../../components/DashboardTitle'
  import DepartmentHandle from './departmentHandle/DepartmentHandle'
  export default {
    name: "MiddleLeftCont",
    components: {
      DashboardBg,
      DashboardTitle,
      DepartmentHandle
    },
    data () {
      return {
        dashboardTitle1: '部门办件完成情况',
        dashboardTitle2: '部门考核综合排名'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .left-content
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    .department-handle
      flex: 1
      display: flex
      flex-direction: column
      .handle-content
        width: 100%
        flex: 1
        display: flex
        display: -webkit-flex
    .department-check
      flex: 1
      display: flex
      flex-direction: column
      .check-content
        width: 100%
        flex: 1
        display: flex
        display: -webkit-flex
    .dashboard-title
      margin: 7px
      display: inline-block
      margin-bottom: 0
</style>
