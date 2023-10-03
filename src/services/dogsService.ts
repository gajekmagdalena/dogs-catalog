import { apiClient } from './api-client'

export const breedsService = {
  prefix: 'breeds',
  getBreeds(urlParams) {
    return apiClient.get(`${this.prefix}?${urlParams}`)
  }
}

export const imagesService = {
  prefix: 'images',
  getBreedImage(imageId) {
    return apiClient.get(`${this.prefix}/${imageId}`)
  }
}
