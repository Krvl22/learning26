import React from 'react'

export const MapDemo2 = () => {
  var students = [
    { id: 1, name: "Krushang", age: 21, gender: "Male", marks: 80 },
    { id: 2, name: "Harsh", age: 22, gender: "Male", marks: 75 },
    { id: 3, name: "Meet", age: 20, gender: "Male", marks: 85 }
  ];

  return (
    <div>
      {students.map(student => (
        <p key={student.id}>
          {student.id} - {student.name} - {student.marks}
        </p>
      ))}
    </div>
  )
}
