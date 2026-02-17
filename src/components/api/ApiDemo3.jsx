import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo3 = () => {

    const [comments, setComments] = useState("")
    const [users, setUsers] = useState([])

    const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/comments?limit=30&skip=0")

    setComments(response.data.total)   
    setUsers(response.data.comments)   

}

    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo3</h1>

            <button onClick={getUsers}>GET</button>

            <h2>COMMENTS = {comments}</h2>

            <table border="1" align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>PostID</th>
                        <th>Likes</th>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Full Name</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.body}</td>
                            <td>{user.postId}</td>
                            <td>{user.likes}</td>
                            <td>{user.user.id}</td>
                            <td>{user.user.username}</td>
                            <td>{user.user.fullName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
