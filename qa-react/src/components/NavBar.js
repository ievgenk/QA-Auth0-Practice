import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          Q&App
        </Link>
      </nav>
    </div>
  );
};
