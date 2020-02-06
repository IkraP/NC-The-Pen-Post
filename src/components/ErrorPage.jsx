import React from "react";

export default function ErrorPage({ err }) {
  console.log(err);
  return (
    <div>
      <p>{err ? err.respose.status : "404"}</p>
      <p>{err ? err.response.data.msg : "Page not found"}</p>
    </div>
  );
}
