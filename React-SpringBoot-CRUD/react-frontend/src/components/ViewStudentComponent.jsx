import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

const ViewStudentComponent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudent();
  }, [id]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Student Details</h3>
        <div className="card-body">
          <div className="row">
            <label>Student First Name:</label>
            <div>{student.firstName}</div>
          </div>
          <div className="row">
            <label>Student Last Name:</label>
            <div>{student.lastName}</div>
          </div>
          <div className="row">
            <label>Student Email Id:</label>
            <div>{student.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentComponent;
