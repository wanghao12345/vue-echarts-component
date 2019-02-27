<template>
  <router-view/>
</template>

<script>
  export default {
    name: "App"
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
    min-height: 600px;
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
