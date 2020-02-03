import axios from "axios";

const getAllArticles = () => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export { getAllArticles };
