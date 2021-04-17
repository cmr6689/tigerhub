import React from 'react';
import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="student">
            {/*<!--<span>{props.name}</span>-->*/}
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired
}

export default Student;