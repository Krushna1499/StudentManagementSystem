import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.getStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

  const viewStudent = (id) => {
    navigate(`/view-student/${id}`); // Corrected syntax
  };

  const editStudent = (id) => {
    navigate(`/update-student/${id}`);
  };

  const deleteStudent = (id) => {
    // Call the deleteStudent method from the service
    StudentService.deleteStudent(id)
      .then(() => {
        // Remove the deleted student from the state
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
        console.log('Student deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  const addStudent = () => {
    navigate('/add-student');
  };

  return (
    <div>
      <h2 className="text-center">Student List</h2>
      <div className="row">
        <div className="col-md-3">
          <button className="btn btn-primary"   style={{ marginBottom: '10px' }}
onClick={addStudent}>
            Add Student
          </button>
        </div>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student First Name</th>
              <th>Student Last Name</th>
              <th>Student Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.emailId}</td>
                <td>
                  <button onClick={() => editStudent(student.id)} className="btn btn-info">
                    Update
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteStudent(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => viewStudent(student.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudentComponent;
