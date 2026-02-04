import React from 'react';

export const MapDemo5 = () => {
  var student = [
    { id: 1, name: "Krushang", marks: 89, age: 21, gender: "Male", city: "Ahmedabad" },
    { id: 2, name: "Harsh", marks: 54, age: 22, gender: "Male", city: "Ahmedabad" },
    { id: 3, name: "Nakul", marks: 79, age: 21, gender: "Male", city: "Ahmedabad" }
  ];

  return (
    <div>
      <h2>MapDemo5</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
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
          {student.map(s => (
            <tr
              key={s.id}
              style={{
                backgroundColor: s.gender === "Male" ? "#176196c9" : "white"
              }}
            >
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
              <td style={{ color: s.age > 20 ? "red" : "black" }}>{s.age}</td>
              <td>{s.gender}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
