import './App.css';
import React from 'react';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';



function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListStudentComponent />} />
            <Route path="/students" element={<ListStudentComponent />} />
            <Route path="/add-student" element={<CreateStudentComponent />} />
            <Route path="/update-student/:id" element={<UpdateStudentComponent />} />
            <Route path="/view-student/:id" element={<ViewStudentComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
