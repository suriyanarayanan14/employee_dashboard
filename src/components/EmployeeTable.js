import React from "react";

const EmployeeTable = ({ employees, deleteEmployee, startEditEmployee }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Designation</th>
          <th>Gender</th>
          <th>Courses</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.mobile}</td>
            <td>{employee.designation}</td>
            <td>{employee.gender}</td>
            <td>{employee.courses.join(", ")}</td>
            <td>
              {employee.image && (
                <img
                  src={employee.image}
                  alt="Employee"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              )}
            </td>
            <td>
              <button onClick={() => deleteEmployee(index)}>Delete</button>
              <button onClick={() => startEditEmployee(index)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
