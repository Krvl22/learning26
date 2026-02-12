import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)
  //handleSubmit --> form -->submmit -->handleSubmit --> it will handle submit...
  //register is a function which is use for register input...

  //callback function
  const submitHandler = (data)=>{
    console.log(data) //{} object
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>Job Application Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>FULL NAME</label>
            <input type='text' placeholder='enter your fullname' {...register("fullName")}></input>
          </div>
          <div>
            <label>EMAIL</label>
            <input type='text' placeholder='enter your email'{...register("email")}></input>
          </div>
          <div>
            <label>PHONE</label>  
            <input type='text' placeholder='enter your phone'{...register("phone")}></input>
          </div>
          <div>
            <label>Position</label>
              <select {...register("position")}>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
          </select>
          </div>
          <div>
            <label>EXPERIENCE(YEARS)</label>
            <input type='number'  placeholder='enter your experience in years'{...register("experience")}></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Full Name = {userData.fullName}</h1>
          <h2>Email = {userData.email}</h2>
          <h2>Phone = {userData.phone}</h2>
          <h2>Position = {userData.position}</h2>
          <h2>Experience = {userData.experience}</h2>
        </div>
          }
        
    </div>
  )
}