import React, { useState } from 'react';

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(employees[index]);
  };

  const handleSave = () => {
    editEmployee(editingIndex, editData);
    setEditingIndex(null);
  };

  return (
    <table>
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
            {editingIndex === index ? (
              <>
                <td>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </td>
                {/* Add similar inputs for other fields */}
                <td>
                  <button onClick={handleSave}>Save</button>
                </td>
              </>
            ) : (
              <>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.designation}</td>
                <td>{employee.gender}</td>
                <td>{employee.courses.join(', ')}</td>
                <td>
                  {employee.image && (
                    <img
                      src={URL.createObjectURL(employee.image)}
                      alt="Employee"
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => deleteEmployee(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
