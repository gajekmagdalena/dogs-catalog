<template>
  <div class="breed-info">
    <div v-if="selectedDog.name">
      <div class="image-wrapper">
        <img :src="imageUrl" />
        <div class="action" @click="onBreedAction(selectedDog, imageUrl)">
          <span v-if="isFavourite(selectedDog.id)">Remove from favorites :c</span>
          <span v-else>Add to Favorites :3</span>
        </div>
      </div>
      <span>Name: {{ selectedDog.name }}</span>
      <span>Weight: {{ selectedDog.weight?.metric }} kg</span>
      <span>Height: {{ selectedDog.height?.metric }} cm</span>
      <span>Temperament: {{ selectedDog.temperament }}</span>
      <span>Life span: {{ selectedDog.life_span }}</span>
    </div>
    <span v-else>Select dog breed to see details </span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { type IDogBreed } from '../interfaces/Dog'
import { useFavouriteBreedsStore } from '../stores/favouriteBreeds'

const { onBreedAction, isFavourite } = useFavouriteBreedsStore()

const props = defineProps({
  selectedDog: {
    type: Object as PropType<IDogBreed>,
    default: () => {}
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.breed-info {
  padding: 1rem;
  font-size: 1rem;
  object-position: 50% 50%;
  text-align: center;
  .image-wrapper {
    position: relative;
    .action {
      background-color: $color-primary;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 25%;
      right: 0;
      visibility: hidden;
      max-width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      max-height: 50%;
      width: 50%;
    }
    &:hover .action {
      cursor: pointer;
      visibility: visible;
      opacity: 0.9;
    }
    span {
      border-bottom: none;
    }
  }
  span {
    display: block;
    border-bottom: 2px $color-primary-light solid;
    padding: 10px 0px;
    text-align: left;
  }
}
</style>
