import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo1 = () => {

    const [message, setMessage] = useState("")
    const [users, setUsers] = useState([])

    const getUsers = async () => {
       
            const response = await axios.get("https://node5.onrender.com/user/user/")
            
            setMessage(response.data.message)
            setUsers(response.data.data)

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo1</h1>

            <button onClick={getUsers}>GET</button>

            <h2>MESSAGE = {message}</h2>

            <table border="1" align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Age</th>
                        <th>IsActive</th>
                        <th>Version</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive ? "Yes" : "No"}</td>
                            <td>{user.__v}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
