import React from "react";
// MOMENT.JS for the date
import { Link } from "@reach/router";
import Voting from "../Voting";
export default function ArticleCard(props) {
  const { article } = props;

  return (
    <article
      style={{
        border: "solid 1px blue",
        width: "75%",
        textAlign: "center",
        display: "inline-block"
      }}
    >
      <p>{article.topic} </p>
      <Link
        to={`${article.article_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3>{article.title}</h3>
      </Link>

      <p>Author:{article.author}</p>
      <Voting votes={article.votes} article_id={article.article_id} />
      <p>Date: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
    </article>
  );
}
