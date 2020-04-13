import React from "react";
import { Link } from "@reach/router";
import Voting from "../Voting";
import { FaRegComment } from "react-icons/fa";
import Moment from "react-moment";

export default function ArticleCard(props) {
  const { article, loggedUser } = props;
  const style = { textDecoration: "none", color: "inherit" };

  return (
    <Link to={`${article.article_id}`} style={style}>
      <article className="article-card">
        <p className="article-card-topic">{article.topic} </p>
        <h3 className="article-card-title">{article.title}</h3>
        <Voting
          loggedUser={loggedUser}
          votes={article.votes}
          article_id={article.article_id}
        />
        <p className="articles-date">
          <Moment format="MMMM YYYY">{article.created_at}</Moment>
        </p>
        <p className="article-card-comments">
          <FaRegComment size={20} comments={article.comment_count} />{" "}
          {article.comment_count} comments
        </p>{" "}
      </article>
    </Link>
  );
}
