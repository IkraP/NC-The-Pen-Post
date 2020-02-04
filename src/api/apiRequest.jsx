import axios from "axios";

const getAllArticles = topic => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/articles", {
      params: {
        topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getArticleByArticleId = article_id => {
  return axios
    .get(`https://ikra-news-api.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};
const getAllTopics = () => {
  return axios
    .get("https://ikra-news-api.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

const getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://ikra-news-api.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export {
  getAllArticles,
  getAllTopics,
  getArticleByArticleId,
  getCommentsByArticleId
};
