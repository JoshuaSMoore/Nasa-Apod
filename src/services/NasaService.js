import axios from 'axios'
import { AppState } from '../AppState.js'
import { Calendar } from '../models.js/Calendar.js'
import { logger } from '../utils/Logger.js'

const apiKey = 'api_key=jyniuoDr4dhsCQqTvQfAWdqK50TpLOhIQX8cf9oV'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})

class NasaService {
  async findImagebyDate(query) {
    const res = await nasaApi.get(`?${apiKey}&date=${query}&`)
    logger.log('the res', res)
    AppState.calendar = new Calendar(res.data)
  }
}
export const nasaService = new NasaService()
