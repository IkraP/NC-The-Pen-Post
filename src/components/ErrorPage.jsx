import React from "react";

export default function ErrorPage({ err }) {
  return (
    <div>
      <p>{err ? err.response.status : "404"}</p>
      <p>{err ? err.response.data.msg : "Page not found"}</p>
    </div>
  );
}
