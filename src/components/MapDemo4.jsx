import React from 'react';

export const MapDemo4 = () => {
  var student = [
    { id: 1, name: "Krushang", marks: 89, age: 21, gender: "Male", city: "Ahmedabad" },
    { id: 2, name: "Harsh", marks: 54, age: 22, gender: "Male", city: "Ahmedabad" },
    { id: 3, name: "Nakul", marks: 79, age: 21, gender: "Male", city: "Ahmedabad" }
  ];

  return (
    <div>
      <h2>MapDemo4</h2>

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
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
              <td>{s.age}</td>
              <td>{s.gender}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
