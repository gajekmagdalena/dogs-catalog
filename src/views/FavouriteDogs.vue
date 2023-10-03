<template>
  <div>
    <div class="container">
      <div class="container-element" v-for="breed in breeds" :key="breed.id">
        <DogInfo :image-url="breed.imageUrl" :selected-dog="breed"></DogInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { favouritesBreeds } from '../stores/breeds'
import DogInfoVue from '../components/DogInfo.vue'
import { mapState } from 'pinia'

export default {
  name: 'FavouriteDogs',
  components: {
    DogInfo: DogInfoVue
  },
  computed: {
    ...mapState(favouritesBreeds, ['breeds'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

* {
  margin: 0;
  padding: 0;
  color: $color-text;
}

.container {
  background-color: $color-primary-dark;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .container-element {
    border: 1px solid $color-primary-light;
  }
}
</style>
