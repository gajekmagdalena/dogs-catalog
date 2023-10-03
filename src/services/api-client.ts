import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.thedogapi.com/v1/',
  headers: {
    Authorization: 'api_key=live_QQgrkG5MK43oPGPil73xXKFq3gVvxRXmQ3UNytnK6EZgR9GkLC49aUfV8gL2TQYm'
  }
})
