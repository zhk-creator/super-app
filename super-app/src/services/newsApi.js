import axios from "axios";

const API_KEY = "YOUR_NEWS_API_KEY";

export const getNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
};