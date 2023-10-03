<template>
  <div class="loading-animation">LOADING</div>
</template>

<script>
export default {
  name: 'LoadingAnimation'
}
</script>

<style scoped>
.loading-animation {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 3px;
  animation-name: moveInLeft;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translate(10rem);
  }
}
</style>
