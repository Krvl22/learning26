import axios from "axios"
import React from "react"
import { useForm } from "react-hook-form"

export const ApiDemo4 = () => {

  const { register, handleSubmit } = useForm()

  const submitHandler = async (data) => {
    try {

      // convert string radio value to boolean
      data.isActive = data.isActive === "true"

      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        data
      )

      console.log(res.data)
      alert("User Added Successfully ✅")

    } catch (err) {
      console.log(err.response)
      alert("Error while adding user ❌")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register User</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <input placeholder="Name" {...register("name")}/>
        <br /><br />

        <input placeholder="Email" {...register("email")}/>
        <br /><br />

        <input type="number" placeholder="Age" {...register("age")}/>
        <br /><br />

        <input type="password" placeholder="Password" {...register("password")}/>
        <br /><br />

        <label>Is Active:</label>
        <br />

        <input type="radio" value="true" {...register("isActive")}/> Active

        <input type="radio" value="false" {...register("isActive")}/> Inactive

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}





// import React from "react"
// import { useForm } from "react-hook-form"

// export const ApiDemo4 = () => {

//   const { register, handleSubmit } = useForm()

//   const submitHandler = (data) => {
//     console.log("Form Data:", data)
//     alert("Form Submitted ✅")
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Register Form</h1>

//       <form onSubmit={handleSubmit(submitHandler)}>

//         <input placeholder="Name" {...register("name")} />
//         <br /><br />

//         <input placeholder="Email" {...register("email")} />
//         <br /><br />

//         <input type="number" placeholder="Age" {...register("age")} />
//         <br /><br />

//         <input type="password" placeholder="Password" {...register("password")} />
//         <br /><br />

//         <select {...register("isActive")}>
//           <option value="true">Active</option>
//           <option value="false">Inactive</option>
//         </select>

//         <br /><br />

//         <button type="submit">Submit</button>

//       </form>
//     </div>
//   )
// }

