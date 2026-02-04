import React from 'react'

export const MapDemo6 = () => {

  var books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 650, rating: 4.8, stock: 0 },
    { id: 2, title: "Java Basics", author: "Herbert Schildt", price: 450, rating: 4.2, stock: 12 },
    { id: 3, title: "React Guide", author: "Dan Abramov", price: 700, rating: 4.9, stock: 3 },
    { id: 4, title: "Python Crash Course", author: "Eric Matthes", price: 500, rating: 4.4, stock: 8 },
    { id: 5, title: "DSA Handbook", author: "Narasimha Karumanchi", price: 550, rating: 4.6, stock: 2 },
    { id: 6, title: "C Programming", author: "Dennis Ritchie", price: 300, rating: 4.1, stock: 15 },
  ]

  return (
    <div>
      <h2>📚 Book Table</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr
              key={book.id}
              style={{
                backgroundColor: book.stock === 0 ? "#ffcccc" : "white" // Condition 1
              }}
            >
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>

              <td
                style={{
                  color: book.price > 500 ? "red" : "black",       // Condition 2
                  fontWeight: book.price > 500 ? "bold" : "normal"
                }}
              >
                {book.price}
              </td>

              <td
                style={{
                  color: book.rating >= 4.5 ? "green" : "black",  // Condition 3
                  fontWeight: book.rating >= 4.5 ? "bold" : "normal"
                }}
              >
                {book.rating}
              </td>

              <td
                style={{
                  backgroundColor: book.stock < 5 ? "#fff3cd" : "#e6ffe6", // Condition 4
                  fontWeight: book.stock < 5 ? "bold" : "normal"
                }}
              >
                {book.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
