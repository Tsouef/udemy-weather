import axios from 'axios';

import {
  FETCH_WEATHER
} from './types';

const API_KEY = 'b3f9e78b775b23faf3805bbc046d60cd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
