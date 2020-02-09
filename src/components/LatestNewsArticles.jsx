import React from "react";
import { Link } from "@reach/router";

export default function LatestNewsArticles(props) {
  const { article } = props;
  return (
    <article className="l-card">
      <div className="l-card-wrapper"></div>
      <img className="l-card-small-title" src="" alt="" />
      <section>
        <p>Featured</p>
        <Link
          to={`/articles/${article.article_id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p className="l-card-title">{article.title}</p>
        </Link>
      </section>
      <section>
        <p>comments: {article.comment_count}</p>
      </section>
    </article>
  );
}
