import React from "react";

export const MapDemo7 = () => {

  var employees = [
    { id: 1, name: "Rahul", department: "HR", salary: 60000, experience: 6, status: "Inactive" },
    { id: 2, name: "Anita", department: "IT", salary: 45000, experience: 3, status: "Active" },
    { id: 3, name: "Vikas", department: "Finance", salary: 70000, experience: 8, status: "Active" },
    { id: 4, name: "Priya", department: "HR", salary: 40000, experience: 2, status: "Active" },
    { id: 5, name: "Aman", department: "IT", salary: 52000, experience: 5, status: "Inactive" },
    { id: 6, name: "Neha", department: "Marketing", salary: 38000, experience: 1, status: "Active" },
  ];

  return (
    <div>
      <h2> Employees Table</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr
              key={emp.id}
              style={{
                backgroundColor: emp.status === "Inactive" ? "#ffcccc" : "white" 
              }}
            >
              <td>{emp.id}</td>
              <td>{emp.name}</td>

              <td
                style={{
                  backgroundColor: emp.department === "HR" ? "#fff3cd" : "white"                 }}
              >
                {emp.department}
              </td>

              <td
                style={{
                  color: emp.salary > 50000 ? "red" : "black",   
                  fontWeight: emp.salary > 50000 ? "bold" : "normal"
                }}
              >
                {emp.salary}
              </td>

              <td
                style={{
                  color: emp.experience >= 5 ? "green" : "black",  
                  fontWeight: emp.experience >= 5 ? "bold" : "normal"
                }}
              >
                {emp.experience}
              </td>

              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
