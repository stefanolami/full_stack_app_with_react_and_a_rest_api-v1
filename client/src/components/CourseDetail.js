import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const CourseDetail = (props) => {

    const [course, setCourse] = useState(null)
    const { id } = useParams();
    const { authenticatedUser } = props.context;
    /* const course = await props.context.actions.getCourse(id); */

    useEffect(() => {
        props.context.actions.getCourse(id)
            .then( response => {
                if(response) {
                    setCourse(response);
                    console.log(response)
                } else {
                    setCourse(null)
                }
            })
        .catch( error => console.log(error.message) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(course)

    return (
        <React.Fragment>
            {
                course ? (
                    authenticatedUser ? (
                        course.Users.id === authenticatedUser.id ? (
                             <div className="actions--bar">
                                <div className="wrap">
                                    <Link className="button" to={`/courses/${id}/update`} onClick={() => props.context.actions.setUrlParams(`/courses/${id}/update`)}>Update Course</Link>
                                    <Link className="button" to="#">Delete Course</Link>
                                    <Link className="button button-secondary" to="/">Return to List</Link>
                                </div>
                            </div>
                        ) : (
                            <React.Fragment></React.Fragment>
                        )
                    ) : (
                        <React.Fragment></React.Fragment>
                    ) 
                ) : (
                    <React.Fragment></React.Fragment>
                )  
            }
            {
                course ? (
                    <React.Fragment>
                        <div className="wrap">
                            <h2 className="course--detail">Course Detail</h2>
                            <form>
                                <div className="main--flex">
                                    <div>
                                        <h3 className="course--detail--title">Course</h3>
                                        <h4 className="course--name">{course.title}</h4>
                                        <p>By {course.Users.firstName} {course.Users.lastName}</p>
                                        <div><ReactMarkdown>{course.description}</ReactMarkdown></div>
                                    </div>
                                    <div>
                                        <h3 className="course--detail--title">Estimated Time</h3>
                                        {
                                            course.estimatedTime ? (
                                                <p>{course.estimatedTime}</p>
                                            ) : (
                                                <p>No Estimated Time</p>
                                            )
                                        }
                                        <h3 className="course--detail--title">Materials Needed</h3>
                                        {
                                            course.materialsNeeded ? (
                                                <div><ReactMarkdown>{course.materialsNeeded}</ReactMarkdown></div>
                                            ) : (
                                                <p>No Materials Needed</p>
                                            )
                                        }    
                                    </div>
                                </div>
                            </form>
                        </div>
                    </React.Fragment> 
                ) : (<h4 className="course--not--found">Course Not Found</h4>)
            }           
        </React.Fragment>
    )   
}

export default CourseDetail;