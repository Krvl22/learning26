import React, { useState } from "react";
import { useFormik } from "formik";

export const DependentDropdown = () => {

  const [states, setStates] = useState([]);

  // JSON Array Design
  const countryData = [
    {
      country: "India",
      states: ["Gujarat", "Maharashtra", "Rajasthan"]
    },
    {
      country: "USA",
      states: ["California", "Texas", "Florida"]
    },
    {
      country: "Canada",
      states: ["Ontario", "Quebec", "Alberta"]
    }
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      gender: "",
      skills: [],
      address: "",
      country: "",
      state: ""
    },

    onSubmit: (values) => {
      console.log(values);
    }
  });

  // Handle Country Change
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    formik.setFieldValue("country", selectedCountry);

    const selectedData = countryData.find(
      (item) => item.country === selectedCountry
    );

    setStates(selectedData ? selectedData.states : []);
    formik.setFieldValue("state", ""); // reset state
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Job Application Form</h1>

      <form onSubmit={formik.handleSubmit}>

        <div>
          <label>FULL NAME</label>
          <input
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </div>

        <div>
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div>
          <label>GENDER</label><br />
          Male
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>SKILLS</label><br />
          React
          <input
            type="checkbox"
            name="skills"
            value="React"
            onChange={formik.handleChange}
          />
          Node
          <input
            type="checkbox"
            name="skills"
            value="Node"
            onChange={formik.handleChange}
          />
          MongoDB
          <input
            type="checkbox"
            name="skills"
            value="MongoDB"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>ADDRESS</label>
          <textarea
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          ></textarea>
        </div>

        {/* Dependent Dropdown */}

        <div>
          <label>COUNTRY</label>
          <select
            name="country"
            value={formik.values.country}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countryData.map((item, index) => (
              <option key={index} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>STATE</label>
          <select
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <br />
        <input type="submit" />

      </form>
    </div>
  );
};
