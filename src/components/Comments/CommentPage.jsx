import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentCard from "./CommentCard";

export default class CommentPage extends Component {
  state = {
    articleIdComments: []
  };

  componentDidMount() {
    this.fetchArticleIdComments();
  }

  fetchArticleIdComments = () => {
    const { article_id } = this.props;
    api
      .getCommentsByArticleId(article_id)
      .then(articleIdComments => this.setState({ articleIdComments }));
  };

  render() {
    const { articleIdComments } = this.state;
    console.log(articleIdComments);
    return (
      <React.Fragment>
        <section>
          <ul>
            {articleIdComments.map(comment => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
