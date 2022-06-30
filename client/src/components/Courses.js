import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Courses = (props) => {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        props.context.actions.getCourses()
            .then(response => setCourses(response))
            .catch(error => console.log(error.message))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
     
    return (
        <React.Fragment>
            <div className="wrap main--grid">
                {
                    courses ? (
                        courses.map((course, index) => {
                            return (
                                <Link className="course--module course--link" to={`/courses/${course.id}`} key={index}>
                                    <h2 className="course--label">Course</h2>
                                    <h3 className="course--title">{course.title}</h3>
                                </Link>
                            ) 
                        })
                    ) : (
                        <h4 className="course--not--found">Courses Not Found</h4>
                    )
                }
                <Link className="course--module course--add--module" to="/courses/create">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </React.Fragment>
    )
    
}

export default Courses;