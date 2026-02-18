import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const OmbdSearch1 = () => {

  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useState("Iron Man")
  const navigate = useNavigate()

  const searchMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`
    )

    if (res.data.Response === "True") {
      setMovies(res.data.Search)
    } else {
      setMovies([])
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>OMDB Search</h1>

      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Search movie..."
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={searchMovie}>Search</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px" }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>

            <button
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
