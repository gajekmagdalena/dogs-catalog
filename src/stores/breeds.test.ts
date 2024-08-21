import { useBreedsStore } from '../stores/breeds'
import { IDogBreed } from '../interfaces/Dog'
import { describe, expect, it } from 'vitest'

describe('onSelectBreed', () => {
  it('should update the selected breed in the breeds store', () => {
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
})
