<template>
  <router-view/>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    name: "App",
    components: {
      HelloWorld
    }
  };
</script>
<style lang="css">
  *{
    margin:0;
    padding:0;
  }
  html,body{
    width:100%;
    height:100%;
  }
  ul{list-style:none}
  a{text-decoration: none;}
  img{vertical-align:top;border:none}

  .clearf:after,
  .clearf:before{
    content:"";
    display:block;
    clear:both;
  }
</style>
