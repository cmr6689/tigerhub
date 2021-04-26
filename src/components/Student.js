import React from 'react';
import PropTypes from "prop-types";
import {
    NavLink
}from 'reactstrap';
import {
    Link
} from 'react-router-dom';

function Student(props) {
    return (
        <div className="student" >
            <span>
            <Link to='/tigerhub/advisor/student-studentsen'>
                <NavLink href="/components/">Student Studentsen</NavLink>
            </Link></span>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired
};

export default Student;