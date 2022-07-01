import React, { useState } from 'react';
import { Link,  useNavigate, useParams } from 'react-router-dom';


const UpdateCourse = (props) => {

    const navigate = useNavigate()
    const { id } = useParams();
    const course = props.context.actions.getCourse(id);

    const [title, setTitle] = useState(course.title);
    const [description, setDesc] = useState(course.description);
    const [estimatedTime, setEstTime] = useState(course.estimatedTime);
    const [materialsNeeded, setMaterials] = useState(course.materialsNeeded);
    const [errors, setErrors] = useState([])

    const {authenticatedUser} = props.context;

    const submit = (e) => {
        e.preventDefault();
        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId: authenticatedUser.id
        }
        props.context.actions.createCourse(course)
            .then(res => {
                if (res === true) {
                    navigate("/");
                } else {
                    setErrors(res);
                }
            })
            .catch(err => console.log(err));
        
    }
    
    return (
        <React.Fragment>
             <div className="wrap">
                <h2>Create Course</h2>
                {
                    errors.length > 0 ? (
                        <div className="validation--errors">
                            <h3>Validation Errors</h3>
                            <ul>
                                {
                                    errors.map((error, index) => {
                                        return (
                                            <li key={index}>{error}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )
                }
                
                <form onSubmit={submit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                            <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={(e) => setEstTime(e.target.value)} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={(e) => setMaterials(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button>
                    <Link to="/"><button className="button button-secondary">Cancel</button></Link>
                </form>
            </div>
        </React.Fragment>
    )
    
}

export default UpdateCourse;