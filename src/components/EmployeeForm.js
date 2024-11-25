import React, { useState, useEffect } from "react";

const EmployeeForm = ({ addEmployee, existingData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: [],
    image: null,
  });

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      courses: checked
        ? [...prevState.courses, value]
        : prevState.courses.filter((course) => course !== value),
    }));
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      gender: "",
      courses: [],
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile No."
        value={formData.mobile}
        onChange={handleInputChange}
        required
      />
      <select
        name="designation"
        value={formData.designation}
        onChange={handleInputChange}
      >
        <option value="">Select Designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleInputChange}
          />
          Female
        </label>
      </div>
      <div>
        Courses:
        <label>
          <input
            type="checkbox"
            value="MCA"
            checked={formData.courses.includes("MCA")}
            onChange={handleCheckboxChange}
          />
          MCA
        </label>
        <label>
          <input
            type="checkbox"
            value="BCA"
            checked={formData.courses.includes("BCA")}
            onChange={handleCheckboxChange}
          />
          BCA
        </label>
        <label>
          <input
            type="checkbox"
            value="BSc"
            checked={formData.courses.includes("BSc")}
            onChange={handleCheckboxChange}
          />
          BSc
        </label>
      </div>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">{existingData ? "Update" : "Submit"}</button>
    </form>
  );
};

export default EmployeeForm;
