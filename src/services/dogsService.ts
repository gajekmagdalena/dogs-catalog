import { IDogBreed, IDogImage } from '@/interfaces/Dog'
import { apiClient } from './api-client'
import { AxiosResponse } from 'axios'

export const breedsService = {
  prefix: 'breeds',
  getBreeds(urlParams: URLSearchParams): Promise<AxiosResponse<IDogBreed[]>> {
    return apiClient.get(`${this.prefix}?${urlParams}`)
  }
}

export const imagesService = {
  prefix: 'images',
  getBreedImage(imageId: string): Promise<AxiosResponse<IDogImage>> {
    return apiClient.get(`${this.prefix}/${imageId}`)
  }
}
