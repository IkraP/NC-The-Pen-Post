import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <li className="topic-list-items">
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          listStyleType: "none"
        }}
        to={`${topic.slug}`}
      >
        {topic.slug}
      </Link>
    </li>
  );
}
