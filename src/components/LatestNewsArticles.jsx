import React from "react";
import { Link } from "@reach/router";
import { FaRegComment } from "react-icons/fa";

export default function LatestNewsArticles(props) {
  const { article } = props;
  return (
    <Link
      to={`/articles/${article.article_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article className="l-card">
        <img className="l-card-img" src="" alt="" />
        <p className="l-card-small-title">Featured</p>
        <p className="l-card-title">{article.title}</p>
        <p className="l-card-comments">
          <FaRegComment size={20} comments={article.comment_count} />{" "}
          {article.comment_count} comments
        </p>{" "}
      </article>
    </Link>
  );
}
