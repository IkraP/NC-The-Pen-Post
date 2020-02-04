import axios from "axios";

const getAllArticles = (topic, article_id) => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/articles", {
      params: {
        topic,
        article_id
      }
    })
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
