import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

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
        <h1>Cource Selection Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>STUDENT NAME</label>
            <input type='text' placeholder='enter student name' {...register("sName")}></input>
          </div>
          <div>
            <label>ENROLLMENT NO</label>
            <input type='text' placeholder='enter your Enrollment No'{...register("eno")}></input>
          </div>
          <div>
            <label>COURSE</label><br />
              React <input type="checkbox" value="React" {...register("course")} />
              Node <input type="checkbox" value="Node" {...register("course")} />
              React <input type="checkbox" value="React" {...register("course")} />
              Java <input type="checkbox" value="Java" {...register("course")} />
              Python <input type="checkbox" value="Python" {...register("course")} />
              C# <input type="checkbox" value="C#" {...register("course")} />
          </div>
          <div>
            <label>City</label>
              <select {...register("city")}>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Surat">Surat</option>
          </select>
          </div>
          <div>
            <label>Semester</label><br />
              Sem 1 <input type="radio" value="Sem1" {...register("semester")} />
              Sem 2 <input type="radio" value="Sem2" {...register("semester")} />
              Sem 3 <input type="radio" value="Sem3" {...register("semester")} />
              Sem 4 <input type="radio" value="Sem4" {...register("semester")} />
              Sem 5 <input type="radio" value="Sem5" {...register("semester")} />
              Sem 6 <input type="radio" value="Sem6" {...register("semester")} />
              Sem 7 <input type="radio" value="Sem7" {...register("semester")} />
              Sem 8 <input type="radio" value="Sem8" {...register("semester")} />
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Student Name = {userData.sName}</h1>
          <h2>Enrollment No = {userData.eno}</h2>
          <h2>Course = {userData.course}</h2>
          <h2>City = {userData.city}</h2>
          <h2>Semester = {userData.semester}</h2>
        </div>
          }
        
    </div>
  )
}