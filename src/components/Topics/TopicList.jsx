import React from "react";
import { Link } from "@reach/router";

export default function TopicList(props) {
  const { topic } = props;

  return (
    <div>
      {" "}
      <Link to={`${topic.slug}`}>
        <li>{topic.slug}</li>
      </Link>
    </div>
  );
}

//  <h1 className="block-page-title">{blockNames[this.props.blockname]}</h1>;
