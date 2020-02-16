import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <div className="topic-list-items">
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          listStyleType: "none"
        }}
        to={`${topic.slug}`}
      >
        <li>{topic.slug}</li>
      </Link>
    </div>
  );
}
