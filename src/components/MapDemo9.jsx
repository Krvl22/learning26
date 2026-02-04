import React from 'react'

export const MapDemo9 = () => {

  var students = [
    { id: 1, name: "Krushang", marks: 89, age: 21, gender: "Male", city: "Ahmedabad" },
    { id: 2, name: "Harsh", marks: 54, age: 22, gender: "Male", city: "Ahmedabad" },
    { id: 3, name: "Nakul", marks: 79, age: 21, gender: "Male", city: "Ahmedabad" },
    { id: 4, name: "Riya", marks: 92, age: 20, gender: "Female", city: "Surat" },
    { id: 5, name: "Amit", marks: 34, age: 23, gender: "Male", city: "Vadodara" },
    { id: 6, name: "Sneha", marks: 67, age: 19, gender: "Female", city: "Rajkot" }
  ]

  return (
    <div>
      <h2>🎓 Students Table</h2>

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr
              key={s.id}
              style={{
                backgroundColor:
                  s.marks < 40
                    ? "#ffcccc"           
                    : s.gender === "Female"
                    ? "#e6f2ff"           
                    : "white"
              }}
            >
              <td>{s.id}</td>
              <td>{s.name}</td>

              <td
                style={{
                  color: s.marks >= 80 ? "green" : "black", 
                  fontWeight: s.marks >= 80 ? "bold" : "normal"
                }}
              >
                {s.marks}
              </td>

              <td
                style={{
                  color: s.age > 21 ? "red" : "black"       
                }}
              >
                {s.age}
              </td>

              <td>{s.gender}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
