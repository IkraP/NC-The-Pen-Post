import axios from "axios";

const request = axios.create({
  baseURL: "https://ikra-news-api.herokuapp.com/api"
});

const getAllArticles = topic => {
  return request
    .get("/articles", {
      params: {
        topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getArticleByArticleId = article_id => {
  return request
    .get(`/articles/${article_id}`)
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
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const postCommentsByArticleId = (article_id, comment) => {
  return request
    .post(`/articles/${article_id}/comments`, {
      username: "jessjelly",
      body: comment
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

const patchVotesByArticleId = (article_id, inc_votes) => {
  console.log(article_id, inc_votes);
  return request.patch(`/articles/${article_id}`, { inc_votes });
};

const patchVotesByCommentId = (comment_id, inc_votes) => {
  return request.patch(`/comments/${comment_id}`, { inc_votes });
};

export {
  getAllArticles,
  getAllTopics,
  getArticleByArticleId,
  getCommentsByArticleId,
  postCommentsByArticleId,
  patchVotesByArticleId,
  patchVotesByCommentId
};
