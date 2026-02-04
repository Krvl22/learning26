import React from "react";

export const MapDemo10 = () => {
  const cars = [
    {
      id: 1,
      brand: "Mercedes-Benz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/512px-Mercedes-Benz_Logo_2010.svg.png",
      price: 2.5,
      speed: 250,
      country: "Germany",
    },
    {
      id: 2,
      brand: "BMW",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/512px-BMW.svg.png",
      price: 2.2,
      speed: 240,
      country: "Germany",
    },
    {
      id: 3,
      brand: "Ferrari",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/512px-Ferrari-Logo.svg.png",
      price: 4.5,
      speed: 340,
      country: "Italy",
    },
    {
      id: 4,
      brand: "Lamborghini",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/512px-Lamborghini_Logo.svg.png",
      price: 5.2,
      speed: 350,
      country: "Italy",
    },
    {
      id: 5,
      brand: "McLaren",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/McLaren_Logo.svg/512px-McLaren_Logo.svg.png",
      price: 4.8,
      speed: 345,
      country: "UK",
    },
    {
      id: 6,
      brand: "Lykan Hypersport",
      image: "", // intentionally missing
      price: 30,
      speed: 395,
      country: "UAE",
    },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚗 Cars Table</h2>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ backgroundColor: "#343a40", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Price (₹ Cr)</th>
            <th>Top Speed</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr
              key={car.id}
              style={{
                backgroundColor: car.price > 5 ? "#fff3cd" : "white",
              }}
            >
              <td>{car.id}</td>
              <td>{car.brand}</td>

              <td>
                {car.image ? (
                  <img
                    src={car.image}
                    alt={car.brand}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td
                style={{
                  color: car.price > 5 ? "red" : "black",
                  fontWeight: car.price > 5 ? "bold" : "normal",
                }}
              >
                {car.price}
              </td>

              <td
                style={{
                  color: car.speed > 340 ? "green" : "black",
                  fontWeight: car.speed > 340 ? "bold" : "normal",
                }}
              >
                {car.speed} km/h
              </td>

              <td>{car.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
