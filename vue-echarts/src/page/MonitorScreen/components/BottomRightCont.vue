<template lang="pug">
  DashboardBg()
    .left-content(slot="dashboardCont")

</template>

<script>
  import DashboardBg from '../../../components/DashboardBg'
  export default {
    name: "BottomRightCont",
    components: {
      DashboardBg
    }
  }
</script>

<style lang="sass" scoped>

</style>
