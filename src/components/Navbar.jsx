import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Netflix
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/NetflixHome">Netflix Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/NetflixMovies">Netflix Movies</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/NetflixShows">Netflix Shows</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/history">History</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/watchlater">Watch Later</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
