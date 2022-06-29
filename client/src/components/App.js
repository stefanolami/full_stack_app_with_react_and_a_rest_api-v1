import React from 'react';
/* import ReactDOM from "react-dom/client"; */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../App.css';

import CourseDetail from './CourseDetail';
import Courses from './Courses';
import CreateCourse from './CreateCourse';
import Header from './Header';
import UpdateCourse from './UpdateCourse';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import UserSignOut from './UserSignOut';
import PrivateRoute from '../PrivateRoute';

import withContext from '../Context';

const UserSignInWithContext = withContext(UserSignIn);
const CourseDetailWithContext = withContext(CourseDetail);

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <PrivateRoute path="/courses/create" element={<CreateCourse />} />
        <PrivateRoute path="/courses/:id/update" element={<UpdateCourse />} />
        <Route path="/courses/:id" element={<CourseDetailWithContext />} />
        <Route path="/signin" element={<UserSignInWithContext />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signout" element={<UserSignOut />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
