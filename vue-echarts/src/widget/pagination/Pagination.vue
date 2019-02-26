<template>
  <nav>
    <ul class="pagination">
      <li @click="createPageList(--currentPage)"><<</li>
      <li @click="createPageList(1)">首页</li>
      <li
        v-for="item in pageList"
        :class="item===currentPage? 'current': ''"
        :key="item"
        @click="createPageList(parseInt(item))"
      >
        {{item}}
      </li>
      <li @click="createPageList(totalPage)">尾页</li>
      <li @click="createPageList(++currentPage)">>></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    data() {
      return {
        totalPage: 30,
        currentPage: 1,
        pageNum: 6,
        pageList: []
      }
    },
    props: ['pageAttr'],
    mounted () {
      this.init ();
    },
    methods: {
      /*
      * 初始化
      */
      init () {
        this.totalPage = this.pageAttr.totalPage
        this.pageNum = this.pageAttr.pageNum
        for (let i = 1; i <= this.pageNum; i++) {
          this.pageList.push(i);
        }
      },
      /**
       * 创建页码列表
       */
      createPageList(val)
      {
        let start = 1;
        if (val < 1) {
          val = 1;
          start = 1;
        }
        if (val > this.totalPage) {
          val = this.totalPage;
          start = this.totalPage - this.pageNum + 1;
        }
        if (val > 0 && val < this.pageNum / 2) {
          start = 1;
        }
        if (val >= this.pageNum / 2 && val <= this.totalPage - this.pageNum / 2) {
          start = val - Math.floor(this.pageNum / 2);
        }
        if (val > this.totalPage - this.pageNum / 2 && val <= this.totalPage) {
          start = this.totalPage - this.pageNum + 1;
        }
        this.currentPage = val;
        this.getPageList(start);
        this.pageAttr.callback(this.currentPage);
      },
      /**
       * 获取分页数据
       */
      getPageList(start) {
        var arr = [];
        for (let i = 0; i < this.pageNum; i++) {
          arr.push(start + i);
        }
        this.pageList = arr;
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
      user-select: none
    li:hover
      color: red
    li.current
      background: red
      color: white
</style>
