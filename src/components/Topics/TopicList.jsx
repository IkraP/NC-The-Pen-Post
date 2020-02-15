import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <div className="topic-list-items">
      <Link to={`${topic.slug}`}>
        <option>{topic.slug}</option>
      </Link>
    </div>
  );
}
