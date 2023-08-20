export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_GEODB_CITIES_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// @params: latitude, longitude,API Key
// Please Uese your own API key
export const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
// 9ad1336a393d8da13d0d523979ee1570
export const weatherApiUrl = "https://api.openweathermap.org/data/2.5";
