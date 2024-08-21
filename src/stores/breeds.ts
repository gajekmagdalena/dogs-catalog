import { breedsService, imagesService } from '../services/dogsService'
import { type IDogBreed } from '../interfaces/Dog'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBreedsStore = defineStore('breedsStore', () => {
  const LIMIT = 60

  const breeds = ref<IDogBreed[]>([])
  const selectedBreed = ref<IDogBreed | null>(null)
  const loading = ref(false)
  const searchParams = ref<{
    page: number
    limit: number
  }>({
    page: 0,
    limit: LIMIT
  })
  const imageUrl = ref('')

  const onSelectBreed = (dog: IDogBreed) => {
    selectedBreed.value = dog
    getBreedImage(dog.reference_image_id)
  }

  const getBreedImage = async (imgId: string) => {
    loading.value = true
    const { url } = await fetchBreedImage(imgId)
    imageUrl.value = url
    loading.value = false
  }

  const fetchBreedImage = async (imgId: string) => {
    try {
      const { data } = await imagesService.getBreedImage(imgId)
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const onInfinityScroll = (breedsList: HTMLElement | null) => {
    const scrollContainer = breedsList
    if (!scrollContainer) return

    const scrollPosition = scrollContainer.scrollTop
    const scrollHeight = scrollContainer.scrollHeight
    const containerHeight = scrollContainer.clientHeight
    if (scrollPosition + containerHeight >= scrollHeight) {
      searchParams.value.page += 1
      getBreeds(true)
    }
  }

  const getBreeds = async (infinityScroll = false) => {
    const urlParams = new URLSearchParams({
      page: searchParams.value.page.toString(),
      limit: searchParams.value.limit.toString()
    })
    const data = await fetchBreeds(urlParams)
    if (infinityScroll) {
      breeds.value.push(...data)
      return
    }
    breeds.value = data
  }

  const fetchBreeds = async (urlParams: URLSearchParams) => {
    try {
      const { data } = await breedsService.getBreeds(urlParams)
      return data
    } catch (err) {
      console.error(err)
    }
  }

  return {
    breeds,
    imageUrl,
    loading,
    selectedBreed,
    onInfinityScroll,
    onSelectBreed,
    getBreeds
  }
})
