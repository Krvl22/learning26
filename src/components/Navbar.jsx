import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";

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

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo1">Map Demo 1</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo2">Map Demo 2</Link>
          </li> 


          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo3">Map Demo 3</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo4">Map Demo 4</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo5">Map Demo 5</Link>
          </li> 


          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo6">Map Demo 6</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo7">Map Demo 7</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo8">Map Demo 8</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo9">Map Demo 9</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo10">Map Demo 10</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo1">useState Demo 1</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo2">useState Demo 2</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo3">useState Demo 3</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/fundemo1">Function Demo</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/iplteams">IPL Teams</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/employees">employees</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">Input Demo 1</Link>
          </li> 

          <li class="nav-item">
              <Link class="nav-link" to="/inputdemo2">Input Demo 2</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/students">Students use of Prop</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">Form Demo 1</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">Form Demo 2</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">Form Demo 3</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">Form Demo 4</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">Form Demo 5</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/formdemo6">Form Demo 6</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/dependentdropdown">Dependent Dropdown</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">API Demo 1</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">API Demo 2</Link>
          </li>

          <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">API Demo 3</Link>
          </li>         
        </ul>
      </div>
    </nav>
  );
};
