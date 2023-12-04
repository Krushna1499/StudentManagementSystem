import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const CreateStudentComponent = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  const navigate = useNavigate();

  const saveStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: state.firstName,
      lastName: state.lastName,
      emailId:state.emailId
    };
    console.log('student => ' + JSON.stringify(student));
    
    StudentService.createStudent(student)
    .then(res => {
      console.log('Student saved successfully:', res.data);
      navigate('/students');
    })
    .catch(error => {
      console.error('Error saving student:', error);
      // Handle the error, e.g., show a notification to the user
      alert('Failed to save student. Please try again.');
    });
    
  };
  

  const changeFirstNameHandler = (event) => {
    setState({ ...state, firstName: event.target.value });
  };

  const changeLastNameHandler = (event) => {
    setState({ ...state, lastName: event.target.value });
  };

  const changeEmailIdHandler = (event) => {
    setState({ ...state, emailId: event.target.value });
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
            <h3 className='text-center'>Add Student</h3>
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
                <button className='btn btn-success' onClick={saveStudent}>
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

export default CreateStudentComponent;