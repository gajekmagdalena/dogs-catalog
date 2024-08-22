import { useBreedsStore } from '../stores/breeds'
import { IDogBreed, IDogImage } from '../interfaces/Dog'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { createPinia, setActivePinia } from 'pinia'
import { imagesService } from '../services/dogsService'

describe('Breeds Store', () => {
  beforeEach(() => {
    // Create a new Pinia instance before each test
    setActivePinia(createPinia())
  })

  test('should update the selected breed in the breeds store', async () => {
    const breedsStore = useBreedsStore()

    const selectedBreed: IDogBreed = {
      id: 183,
      name: 'Pekingese',
      weight: {
        imperial: '14',
        metric: '6'
      },
      height: {
        imperial: '6 - 9',
        metric: '15 - 23'
      },
      life_span: '14 - 18 years',
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      temperament: 'Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent',
      reference_image_id: 'ByIiml9Nm'
    }

    breedsStore.onSelectBreed(selectedBreed)

    expect(breedsStore.selectedBreed).toEqual(selectedBreed)
  })

  test('should fetch a breed image from the breeds store', async () => {
    const breedsStore = useBreedsStore()

    const imgId = 'ByIiml9Nm'
    const mockImageUrl = 'ByIiml9Nm_1280.jpg'
    const mockResponse: AxiosResponse<IDogImage> = {
      data: { url: mockImageUrl, id: imgId },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {} as InternalAxiosRequestConfig
    }
    const mockFetchBreedImage = vi
      .spyOn(imagesService, 'getBreedImage')
      .mockResolvedValue(mockResponse)

    await breedsStore.getBreedImage(imgId)

    expect(breedsStore.loading).toBe(false)
    expect(breedsStore.imageUrl).toBe(mockImageUrl)
    expect(mockFetchBreedImage).toHaveBeenCalled()
    expect(mockFetchBreedImage).toBeCalledWith(imgId)

    // // Restore the mocked function
    mockFetchBreedImage.mockRestore()
  })

  test('should handle an error without breaking the app', async () => {
    const breedsStore = useBreedsStore()

    const imgId = 'ByIiml9Nm'

    const mockFetchBreedImage = vi
      .spyOn(imagesService, 'getBreedImage')
      .mockRejectedValue(new Error('Failed to fetch image'))

    await breedsStore.getBreedImage(imgId)

    expect(breedsStore.loading).toBe(false)
    expect(breedsStore.imageUrl).toBe('')
    expect(mockFetchBreedImage).toHaveBeenCalled()
    expect(mockFetchBreedImage).toBeCalledWith(imgId)

    // // Restore the mocked function
    mockFetchBreedImage.mockRestore()
  })
})
