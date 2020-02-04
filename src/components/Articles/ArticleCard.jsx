import React from "react";
// MOMENT.JS for the date
export default function ArticleCard(props) {
  const { article } = props;

  return (
    <article>
      <h2>{article.title}</h2>
      <p>
        Topic:{article.topic}
        Author:{article.author}
        votes:{article.votes}
        {""}
        Date: {article.created_at}
      </p>
    </article>
  );
}
