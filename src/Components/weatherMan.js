const API_KEY = "29f793f0b933ef07f264e3a2bb70d944";
const BASE_URL = "https://pro.openweathermap.org/data/2.5/";

export const weatherData = async (city, units) => {
    return fetch(BASE_URL + "weather?q=" + encodeURIComponent(city) + "&units=" + units + "&appid=" + API_KEY)
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Weather data not found");
        // }
        return response.json();
      })
      .catch((error) => {
        // console.log("Error:", error);
        throw error;
      });
  };
  
  export const hourlyData = async (city, units) => {
    return fetch(BASE_URL + "forecast/hourly?q=" + encodeURIComponent(city) + "&cnt=24&units=" + units + "&appid=" + API_KEY)
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Hourly data not found");
        // }
        return response.json();
      })
      .catch((error) => {
        // console.log("Error:", error);
        throw error;
      });
  };
  
  export const dailyData = async (city, units) => {
    return fetch(BASE_URL + "forecast/daily?q=" + encodeURIComponent(city) + "&cnt=16&units=" + units + "&appid=" + API_KEY)
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Daily data not found");
        // }
        return response.json();
      })
      .catch((error) => {
        // console.log("Error:", error);
        throw error;
      });
  };
  