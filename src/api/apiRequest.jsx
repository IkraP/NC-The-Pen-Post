import axios from "axios";

const getAllArticles = () => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getAllTopics = () => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export { getAllArticles, getAllTopics };
