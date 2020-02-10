import React from "react";
import { Link } from "@reach/router";
import Voting from "../Voting";
import { FaRegComment } from "react-icons/fa";

export default function ArticleCard(props) {
  const { article, loggedUser } = props;

  return (
    <article className="article-card">
      <p className="article-card-topic">{article.topic} </p>
      <Link
        to={`${article.article_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 className="article-card-title">{article.title}</h3>
      </Link>
      <Voting
        loggedUser={loggedUser}
        votes={article.votes}
        article_id={article.article_id}
      />
      <p>Date: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <FaRegComment size={20} />
      <p className="article-card-comments">
        <FaRegComment size={20} comments={article.comment_count} />{" "}
        {article.comment_count} comments
      </p>{" "}
    </article>
  );
}
