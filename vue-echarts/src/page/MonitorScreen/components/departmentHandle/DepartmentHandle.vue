<template lang="pug">
  .handle-box
    ul
      li(
        v-for= "item in ListArr"
        :key = "item.title"
      )
        .title {{item.title}}
        .value {{item.value}}

</template>

<script>
  export default {
    name: "DepartmentHandle",
    data () {
      return {
        ListArr: [{
          title: '今日受理',
          value: '53'
        }, {
          title: '本月受理',
          value: '462'
        }, {
          title: '办理中',
          value: '326'
        }, {
          title: '即将逾期',
          value: '87'
        }, {
          title: '逾期',
          value: '114'
        }, {
          title: '本月办结',
          value: '376'
        }]
      }
    }
  }
</script>

<style lang="sass" scoped>
  .handle-box
    width: 100%
    height: 100%
    box-sizing: border-box
    padding: 7px
    padding-bottom: 0
    ul
      width: 100%
      height: 100%
      display: flex
      display: -webkit-flex
      flex-wrap: wrap
      background: rgba(195, 195, 195, 0.2)
      li
        width: 31.3%
        height: 45%
        margin: 1%
        text-align: center
        display: flex
        display: -webkit-flex
        flex-direction: column
        color: white
        box-sizing: border-box
        border: 1px solid #7ed7ff
        .title
          flex: 1
          display: flex
          display: -webkit-flex
          align-items: center
          justify-content: center
          background: #00BCD4
        .value
          flex: 1
          display: flex
          display: -webkit-flex
          align-items: center
          justify-content: center
</style>
