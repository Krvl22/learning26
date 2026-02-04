import React from 'react'

export default function ContantComponents
() {
  var year=2026;
  var name="Krushang";
  var age=21;
  var internship={
    company:"Growtih Private LTD",
    role:"Mern Stack"
  }
  return (
        <div>
        <div style={{backgroundColor : "rgba(17, 135, 88, 0.59)",color : "rgba(8, 7, 39, 0.93)",textAlign:"center",padding:"30px",margin:"10px",borderWidth:"3px",bordercolor:"rgb(231, 181, 120)",borderStyle:"solid"}}>
        <h1>Hello</h1>
        <h2>Year {year}</h2>
        <h2>My Name is {name}</h2>
        <h2>My age is {age}</h2>
        <h2>"Company name is {internship.company}</h2>
        <h2>"My role is {internship.role}</h2>
      </div>   
      </div>
       
           


  )
}
