<template lang="pug">
  DashboardBg()
    .left-content(slot="dashboardCont")
</template>

<script>
  import DashboardBg from '../../../components/DashboardBg'
  export default {
    name: "MiddleRightCont",
    components: {
      DashboardBg
    }
  }
</script>

<style scoped>

</style>
