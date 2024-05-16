
export const getNews = async () => {
  try {
    return await fetch('news.json').then(res => res.json());
  } catch (error) {
    console.error('Error fetching news:', error);
    return {};
  }
}