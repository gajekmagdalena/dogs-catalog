<template>
  <div class="container">
    <div class="container-element" v-for="breed in favouriteBreeds" :key="breed.id">
      <DogInfo :image-url="breed.imageUrl" :selected-dog="breed"></DogInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavouriteBreedsStore } from '../stores/favouriteBreeds'

const { favouriteBreeds } = useFavouriteBreedsStore()
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as v;

* {
  margin: 0;
  padding: 0;
  color: v.$color-text;
}

.container {
  background-color: v.$color-primary-dark;
  height: 92vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .container-element {
    border: 1px solid v.$color-primary-light;
  }
}
</style>
