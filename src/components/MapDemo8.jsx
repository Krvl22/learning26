import React from 'react';

export const MapDemo8 = () => {

  var movies = [
    { id: 1, name: "Inception", genre: "Action", rating: 8.8, year: 2010, status: "Hit" },
    { id: 2, name: "3 Idiots", genre: "Drama", rating: 8.4, year: 2009, status: "Hit" },
    { id: 3, name: "KGF", genre: "Action", rating: 8.2, year: 2018, status: "Hit" },
    { id: 4, name: "Radhe", genre: "Action", rating: 4.5, year: 2021, status: "Flop" },
    { id: 5, name: "Avatar", genre: "Sci-Fi", rating: 7.8, year: 2009, status: "Hit" },
    { id: 6, name: "Jawan", genre: "Action", rating: 7.6, year: 2023, status: "Hit" }
  ];

  return (
    <div>
      <h2> Movies Table</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {movies.map(m => (
            <tr
              key={m.id}
              style={{
                backgroundColor:
                  m.status === "Flop"
                    ? "#ffcccc"                 
                    : m.genre === "Action"
                    ? "#cce5ff"                 
                    : "white"
              }}
            >
              <td>{m.id}</td>
              <td>{m.name}</td>
              <td>{m.genre}</td>

              <td
                style={{
                  color: m.rating >= 8 ? "green" : "black",  
                  fontWeight: m.rating >= 8 ? "bold" : "normal"
                }}
              >
                {m.rating}
              </td>

              <td
                style={{
                  color: m.year < 2015 ? "red" : "black"     
                }}
              >
                {m.year}
              </td>

              <td>{m.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
