import type { IDogBreed } from '@/interfaces/Dog'
import { defineStore } from 'pinia'

export const favouritesBreeds = defineStore('favouritesBreeds', {
  state: () => ({ breeds: [] as any }),
  getters: {},
  actions: {
    addBreed(breed: IDogBreed, imageUrl: string) {
      if (!this.breeds.find((item: any) => item.id === breed.id))
        this.breeds.push({ ...breed, imageUrl })
    },
    removeBreed(breedId: number) {
      const breed = this.breeds.find((item: any) => item.id === breedId)
      const idx = this.breeds.indexOf(breed)
      if (idx >= 0) {
        this.breeds.splice(idx, 1)
      }
    },
    isFavourite(breedId: number) {
      return !!this.breeds.find((item: any) => item.id === breedId)
    }
  }
})
