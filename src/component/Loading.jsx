import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <>
      <div className="d-flex" style={{ gap: "10px" }}>
        <Spinner animation="border" />
        <h3> Loading . . . </h3>
      </div>
    </>
  );
}

export default Loading;
