import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          listStyleType: "none",
        }}
        to={`${topic.slug}`}
      >
        <li className="topic-list-items">{topic.slug}</li>
      </Link>
    </div>
  );
}
