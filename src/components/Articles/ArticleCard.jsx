import React from "react";
// MOMENT.JS for the date
import { Link } from "@reach/router";
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
      <h2>{article.title}</h2> <p>Topic:{article.topic} </p>
      <p>Author:{article.author}</p>
      <p>votes: {article.votes}</p>
      <p>Date: {article.created_at}</p>
    </article>
  );
}
