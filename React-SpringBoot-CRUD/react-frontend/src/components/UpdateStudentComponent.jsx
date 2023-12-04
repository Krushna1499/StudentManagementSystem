import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

const UpdateStudentComponent = () => {
  const [state, setState] = useState({
    id: '',
    firstName: '',
    lastName: '',
    emailId: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();
  console.log('Student ID:', id);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        const student = response.data;
        setState({
          id: student.id,
          firstName: student.firstName,
          lastName: student.lastName,
          emailId: student.emailId,
        });
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, [id]);

  const updateStudent = async (e) => {
    e.preventDefault();
    
    const student = {
      id: state.id,
      firstName: state.firstName,
      lastName: state.lastName,
      emailId: state.emailId,
    };

    console.log('student => ', student);

    try {
      const response = await StudentService.updateStudent(student);
      console.log('Update successfully:', response.data);
      navigate('/students');
    } catch (error) {
      console.error('Not updated:', error);
      alert('Failed to update student. Please try again.');
    }
  };

  const changeFirstNameHandler = (event) => {
    setState((prevState) => ({ ...prevState, firstName: event.target.value }));
  };

  const changeLastNameHandler = (event) => {
    setState((prevState) => ({ ...prevState, lastName: event.target.value }));
  };

  const changeEmailIdHandler = (event) => {
    setState((prevState) => ({ ...prevState, emailId: event.target.value }));
  };

  const cancel = () => {
    console.log('Cancel button clicked');
    navigate('/students');
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Update Student</h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>First Name: </label>
                  <input
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={state.firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Last Name: </label>
                  <input
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    value={state.lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Email Id: </label>
                  <input
                    placeholder='Email Address'
                    name='emailId'
                    className='form-control'
                    value={state.emailId}
                    onChange={changeEmailIdHandler}
                  />
                </div>
                <button className='btn btn-success' onClick={updateStudent}>
                  Save
                </button>
                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px' }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentComponent;
