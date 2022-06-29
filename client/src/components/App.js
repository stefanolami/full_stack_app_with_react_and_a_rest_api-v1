import React from 'react';
/* import ReactDOM from "react-dom/client"; */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import '../App.css';

import CourseDetail from './CourseDetail';
import Courses from './Courses';
import CreateCourse from './CreateCourse';
import Header from './Header';
import UpdateCourse from './UpdateCourse';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import UserSignOut from './UserSignOut';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/create" element={<CreateCourse />} />
        <Route path="/courses:id" element={<CourseDetail />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signout" element={<UserSignOut />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
