<template>
  <div>
    <!-- Dog info -->
    <div class="container">
      <div class="breeds-list" ref="breedsList" @scroll="onInfinityScroll(breedsList)">
        <div v-for="breed in breeds" :key="breed.id">
          <button @click="onclick(breed)">{{ breed.name }}</button>
        </div>
      </div>
      <LoadingAnimation v-if="loading"></LoadingAnimation>
      <DogInfo v-else :imageUrl="imageUrl" :selected-dog="selectedBreed"></DogInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBreedsStore } from '../stores/breeds'
import { IDogBreed } from '@/interfaces/Dog'
const breedsStore = useBreedsStore()

const { onSelectBreed, getBreedImage, getBreeds, onInfinityScroll } = breedsStore
const { breeds, imageUrl, loading, selectedBreed } = storeToRefs(breedsStore)

const breedsList = ref<HTMLElement | null>(null)

const onclick = (breed: IDogBreed) => {
  onSelectBreed(breed)
  getBreedImage(breed.reference_image_id)
}
onMounted(() => {
  getBreeds()
})
</script>

<style lang="scss" scoped>
@use '../assets/variables' as v;

* {
  margin: 0;
  padding: 0;
  color: v.$color-text;
}

button {
  background-color: v.$color-detail-dark;
  border: 1px v.$color-detail-dark;
  border-radius: 4px;
  padding: 2px;
  margin: 2px;

  &:hover {
    background-color: v.$color-detail-light;
  }
}
.breeds-list {
  overflow-y: scroll;
  height: 100%;
}
.container {
  background-color: v.$color-primary-dark;
  height: 92vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 2fr;
}
</style>
