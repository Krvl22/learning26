import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export const MovieDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})

  useEffect(() => {

    const fetchMovie = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`
      )
      setMovie(res.data)
    }

    fetchMovie()

  }, [id])

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{movie.Title}</h1>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
      />

      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Rated:</b> {movie.Rated}</p>
      <p><b>Released:</b> {movie.Released}</p>
      <p><b>Runtime:</b> {movie.Runtime}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Writer:</b> {movie.Writer}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>Language:</b> {movie.Language}</p>
      <p><b>Country:</b> {movie.Country}</p>
      <p><b>Awards:</b> {movie.Awards}</p>
      <p><b>Metascore:</b> {movie.Metascore}</p>
      <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
      <p><b>IMDB Votes:</b> {movie.imdbVotes}</p>
      <p><b>Box Office:</b> {movie.BoxOffice}</p>
      <p><b>Production:</b> {movie.Production}</p>
      <p><b>Plot:</b> {movie.Plot}</p>

    </div>
  )
}
