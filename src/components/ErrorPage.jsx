import React from "react";
import notFound from "../images/404notfound.svg";

export default function ErrorPage({ err }) {
  const img = (
    <img
      style={{ height: "300px", width: "300px" }}
      src={notFound}
      alt="404 not found"
    ></img>
  );
  return (
    <div>
      {img}
      <p>{err ? err.response.status : "404"}</p>
      <p>{err ? err.response.data.msg : "Page not found"}</p>
    </div>
  );
}
