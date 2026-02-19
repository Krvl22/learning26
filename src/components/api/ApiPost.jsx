// import axios from 'axios'
// import React from 'react'

// export const ApiPost = () => {

//     const addUser = async()=>{
//         //form -->
//         const userObj = {
//             name:"amit",
//             age:23,
//             email:"amit1@gmail.com",
//             password:"amit123",
//             isActive:true
//         }

//         //post(url,obj)
//         try{
//         const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
//         console.log(res)
//         console.log(res.data)
//         }catch(err){
//             console.log(err)
//             alert("error while adding user")
//         }
//     }

//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>API DEMO 2</h1>
//         <button onClick={()=>{addUser()}}>ADD</button>
//     </div>
//   )
// }


import axios from "axios"
import React from "react"

export const ApiPost = () => {

  const addUser = async () => {

    const userObj = {
      name: "amit",
      age: 23,
      email: "amit" + Date.now() + "@gmail.com",
      password: "amit123",
      isActive: true
    }

    try {

      const res = await axios.post(
        "https://node5.onrender.com/user/user",  
        userObj,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log("SUCCESS:", res.data)
      alert("User Added Successfully ✅")

    } catch (err) {

      console.log("FULL ERROR:", err.response)
      console.log("STATUS:", err.response?.status)
      console.log("DATA:", err.response?.data)

      alert("Error while adding user ")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API POST DEMO</h1>
      <button onClick={addUser}>ADD USER</button>
    </div>
  )
}
