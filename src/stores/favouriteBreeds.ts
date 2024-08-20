import type { IDogBreed } from '@/interfaces/Dog'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type IFavouriteBreed = IDogBreed & { imageUrl: string }

export const useFavouriteBreedsStore = defineStore('favouriteBreedsStore', () => {
  const favouriteBreeds = ref<IFavouriteBreed[]>([])

  const onBreedAction = (selectedBreed: IDogBreed, imageUrl: string) => {
    if (isFavourite(selectedBreed.id)) {
      removeBreedFromFavourites(selectedBreed.id)
    } else {
      addBreedToFavourites(selectedBreed, imageUrl)
    }
  }
  const addBreedToFavourites = (breed: IDogBreed, imageUrl: string) => {
    if (!favouriteBreeds.value.find((item: any) => item.id === breed.id))
      favouriteBreeds.value.push({ ...breed, imageUrl })
  }
  const removeBreedFromFavourites = (breedId: number) => {
    const breed = favouriteBreeds.value.find((item: any) => item.id === breedId)
    if (!breed) return
    const idx = favouriteBreeds.value.indexOf(breed)
    if (idx >= 0) {
      favouriteBreeds.value.splice(idx, 1)
    }
  }

  const isFavourite = (breedId: number) => {
    return !!favouriteBreeds.value.find((item: any) => item.id === breedId)
  }

  return {
    favouriteBreeds,
    isFavourite,
    onBreedAction
  }
})
