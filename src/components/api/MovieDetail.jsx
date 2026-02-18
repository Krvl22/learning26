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
      <img src={movie.Poster} alt={movie.Title} />

      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
      <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
    </div>
  )
}
