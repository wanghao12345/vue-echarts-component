<template>
  <nav>
    <ul class="pagination">
      <li><<</li>
      <li>首页</li>
      <li v-for="(item, index) in pageList" :class="item===currentPage? 'current': ''" :key="index">{{item}}</li>
      <li>尾页</li>
      <li>>></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    data () {
      return {
        totalPage: 30,
        currentPage: '1',
        pageList: ['1', '2', '3', '...', '4', '5']
      }
    },
    methods: {
      /**
       * 创建页码列表
       */
      createPageList () {

      }
    }
  }
</script>

<style scoped lang="sass">
  .pagination
    width: 100%
    height: 40px
    display: inline-flex
    li
      height: 35px
      width: 35px
      background: #e8e8e8
      margin: 0 5px
      line-height: 35px
      text-align: center
      cursor: pointer
      font-size: 14px
      border-radius: 5px
      color: #868686
    li:hover
      background: red
      color: white
    li.current
      background: red
      color: white
</style>
