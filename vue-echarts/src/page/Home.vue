<template lang="pug">
  Pagination(class="page" :pageAttr="pageAttr")
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Pagination from '@/widget/pagination/Pagination'

  export default {
    name: "Home",
    data() {
      return {
        pageAttr: {
          totalPage: 20,
          pageNum: 7,
          callback: function (pageNum) {
            console.log(`点击了第${pageNum}页`)
          }
        }
      }
    },
    components: {
      HelloWorld,
      Pagination
    }
  }
</script>

<style scoped lang="sass">
  .page
    margin: 120px

</style>
