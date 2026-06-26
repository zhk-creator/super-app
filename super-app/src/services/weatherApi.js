import axios from "axios";

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

export const getWeather = async (city = "Hyderabad") => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error("Weather Error:", error);
    return null;
  }
};