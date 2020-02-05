import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <div>
      <Link to={`${topic.slug}`}>
        <option>{topic.slug}</option>
      </Link>
    </div>
  );
}
