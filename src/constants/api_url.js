const location = "Buenos Aires,ar";
// const location2 = "Barcelona,ES";

const api_key = "1bb06bc61b696d5406573e4a0eca1d17";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`
