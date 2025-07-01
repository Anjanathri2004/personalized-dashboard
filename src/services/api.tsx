import axios from 'axios';

export const fetchNews = async (category: string) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&country=us`
  );
  return response.data.articles;
};
