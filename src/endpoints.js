import { API_KEY } from "./constants";

export const getWeatherEndpoint = (city = '', country = '') => {
  if (city && country) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
  } else if (city && !country) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  } else {
    console.error('no city or country received')
  }
}