import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/pagenotfound.css";

export const PageNotFound = () => {
  return (
    <div className="pnf-container">
      <h1 className="pnf-title">404</h1>
      <h2 className="pnf-subtitle">Page Not Found</h2>
      <p className="pnf-text">
        Oops! The page you're looking for doesn’t exist.
      </p>

      <Link to="/" className="pnf-button">
        Go Back Home
      </Link>
    </div>
  );
};
