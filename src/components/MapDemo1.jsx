import React from 'react'

export const MapDemo1 = () => {
    var car=["Audi","BMW","Mercedese","Ferrari","Lamnourghini"]
  return (
    <div>
        <h2>MapDemo1</h2>
        <div>
            {car.map((carName,index)=>
            <p key={index}>{carName}</p>)}
        </div>
    </div>
  )
}
