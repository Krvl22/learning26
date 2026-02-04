import React from 'react'

export const MapDemo2 = () => {
  var students = [
    { id: 1, name: "Krushang", age: 21, gender: "Male", marks: 80 }   
  ]

  return (
    <div>
      <div style={{backgroundColor : "rgba(17, 135, 88, 0.59)",color : "rgba(8, 7, 39, 0.93)",textAlign:"center",padding:"30px",margin:"10px",borderWidth:"3px",bordercolor:"rgb(231, 181, 120)",borderStyle:"solid"}}>
        <h2>Studnet Id : {students[0].id}</h2>
        <h2>Studnet Name : {students[0].name}</h2>
        <h2>Student Age : {students[0].age}</h2>
        <h2>Student Marks : {students[0].marks}</h2>
        <h2>Student Gender : {students[0].gender}</h2>
      </div> 
    </div>  
  )
}
