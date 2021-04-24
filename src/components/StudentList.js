import React from 'react';
import Student from "./Student";
//import props from "props"
import {
    NavLink
}from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


function StudentList(props) {
    return (
        <div>
            {/* {props.students.map(s => <Student key={s.id} name={s.name} />)} */}
            <Link to='/tigerhub/advisor/student-studentsen'>
                <NavLink href="/components/">Student Studentsen</NavLink>
            </Link>
            <Link to='/tigerhub/advisor/'>
                <NavLink href="/components/">Lores Ipsum</NavLink>
            </Link>
            <Link to='/tigerhub/advisor/'>
                <NavLink href="/components/">Zack Pepper</NavLink>
            </Link>
            <Link to='/tigerhub/advisor/'>
                <NavLink href="/components/">Jeff Loepsk</NavLink>
            </Link>
        </div>
    );
    
}

export default StudentList;