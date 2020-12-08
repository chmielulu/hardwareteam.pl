import React from "react";
import { Link } from "react-router-dom";

const View404 = () => {
  return (
    <div>
      <h1>Ooops! 404 Not Found!</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default View404;
