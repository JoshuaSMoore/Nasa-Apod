import axios from 'axios'
import { AppState } from '../AppState.js'

const apiKey = 'jyniuoDr4dhsCQqTvQfAWdqK50TpLOhIQX8cf9oV'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=jyniuoDr4dhsCQqTvQfAWdqK50TpLOhIQX8cf9oV'
})

// class NasaService
