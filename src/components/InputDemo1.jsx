import React, { useState } from 'react';

export const InputDemo1 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");



  return (
    <div style={{ padding: "20px" }}>
     
      <label>Name:</label>
      <input type="text"placeholder="Enter your name" value={name}onChange={(e) => setName(e.target.value)}/>
      <h3>Your Name: {name}</h3>

      <label>Age:</label>
      <input type="text"placeholder="Enter your age" value={age}onChange={(e) => setAge(e.target.value)}/>
      <h3>Your Age: {age}</h3>

      <label>Email:</label>
      <input type="text"placeholder="Enter your email" value={email}onChange={(e) => setEmail(e.target.value)}/>
      <h3>Your Email: {email}</h3>

       <label>Password:</label>
      <input type="text"placeholder="Enter your phone" value={password}onChange={(e) => setPassword(e.target.value)}/>
      <h3>Your Password: {password}</h3>

      <label>Phone:</label>
      <input type="text"placeholder="Enter your phone" value={phone}onChange={(e) => setPhone(e.target.value)}/>
      <h3>Your Phone: {phone}</h3>

      <label>Address:</label>
      <input type="text"placeholder="Enter your address" value={address}onChange={(e) => setAddress(e.target.value)}/>
      <h3>Your Address: {address}</h3>

      <label>City:</label>
      <input type="text"placeholder="Enter your city" value={city}onChange={(e) => setCity(e.target.value)}/>
      <h3>Your City: {city}</h3>

      <label>State:</label>
      <input type="text"placeholder="Enter your state" value={state}onChange={(e) => setState(e.target.value)}/>
      <h3>Your State: {state}</h3>

      <label>Country:</label>
      <input type="text"placeholder="Enter your Country" value={country}onChange={(e) => setCountry(e.target.value)}/>
      <h3>Your COuntry: {country}</h3>

      <label>Gender:</label>
      <input type="text"placeholder="Enter your Gender" value={gender}onChange={(e) => setGender(e.target.value)}/>
      <h3>Your Gender: {gender}</h3>

    </div>
  );
};
