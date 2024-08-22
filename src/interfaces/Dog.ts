export interface IMeasurement {
  imperial: string
  metric: string
}

export interface IDogBreed {
  id: number
  name: string
  weight: IMeasurement
  height: IMeasurement
  life_span: string
  bred_for: string
  breed_group: string
  temperament: string
  origin?: string
  reference_image_id: string
  country_code?: string
}

export interface IDogImage {
  id: string
  url: string
  breeds?: IDogBreed[]
  width?: number
  height?: number
}
