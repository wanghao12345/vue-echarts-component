<template>
  <div class="screen-bg-box">
    <vue-particles
      color="#1E9FFF"
      :particleOpacity="0.7"
      :particlesNumber="160"
      shapeType="circle"
      :particleSize="4"
      linesColor="#1E9FFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="screen-bg"
    ></vue-particles>
  </div>
</template>

<script>
  export default {
    name: "ScreenBg",
    components: {
    }
  }
</script>

<style lang="sass" scoped>
  .screen-bg-box
    width: 100%
    height: 100%
    .screen-bg
      width: 100%
      height: 100%
      background-color: #0086b3
      background-size: 100% 100%
</style>
