<template>
  <div>
    <!-- Dog info -->
    <div class="container">
      <div class="breeds-list" ref="breedsList" @scroll="infinityScroll">
        <div v-for="dog in dogs" :key="dog.id">
          <button @click="onDogSelect(dog)">{{ dog.name }}</button>
        </div>
      </div>
      <LoadingAnimation v-if="loading"></LoadingAnimation>
      <DogInfo v-else :imageUrl="imageUrl" :selected-dog="selectedDog"></DogInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { type IDogBreed } from '../interfaces/Dog'
import { breedsService, imagesService } from '../services/dogsService'
import params from 'query-params'
import DogInfoVue from '../components/DogInfo.vue'
import LoadingAnimationVue from '../components/LoadingAnimation.vue'

const LIMIT = 60
export default {
  name: 'DogsCatalog',
  components: {
    DogInfo: DogInfoVue,
    LoadingAnimation: LoadingAnimationVue
  },
  data() {
    return {
      dogs: [] as IDogBreed[],
      selectedDog: {} as IDogBreed,
      searchParams: {
        page: 0,
        limit: LIMIT
      },
      imageUrl: '',
      loading: false
    }
  },
  created() {
    this.getDogsList()
  },
  methods: {
    infinityScroll() {
      const scrollContainer = this.$refs.breedsList as any
      const scrollPosition = scrollContainer.scrollTop
      const scrollHeight = scrollContainer.scrollHeight
      const containerHeight = scrollContainer.clientHeight
      if (scrollPosition + containerHeight >= scrollHeight) {
        this.searchParams.page += 1
        this.getDogsList(true)
      }
    },
    async getBreedImage(imgId: string) {
      try {
        this.loading = true
        const { data } = await imagesService.getBreedImage(imgId)
        this.imageUrl = data.url
      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    onDogSelect(dog) {
      this.selectedDog = dog
      this.getBreedImage(dog.reference_image_id)
    },
    async getDogsList(infinityScroll = false) {
      try {
        const urlParams = params.encode(this.searchParams)
        const { data } = await breedsService.getBreeds(urlParams)
        if (infinityScroll) {
          this.dogs = [...this.dogs, ...data]
          return
        }
        this.dogs = data
      } catch (err) {
        console.error(err)
      }
    }
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

button {
  background-color: $color-detail-dark;
  border: 1px $color-detail-dark;
  border-radius: 4px;
  padding: 2px;
  margin: 2px;

  &:hover {
    background-color: $color-detail-light;
  }
}
.breeds-list {
  overflow-y: scroll;
  height: 100vh;
}
.container {
  background-color: $color-primary-dark;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 2fr;
}
</style>
