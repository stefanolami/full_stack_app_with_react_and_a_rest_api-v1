import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserSignOut = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        props.context.actions.signOut();
        navigate('/');
    })

    return (
        <React.Fragment></React.Fragment>
    )
}

export default UserSignOut;