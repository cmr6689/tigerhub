import React from "react";
import StudentSearchTerm from "./StudentSearchTerm";

export default class StudentSearchContainer extends React.Component {
    render() {
        return (
            <div className='students'>
                {this.props.students.map(student => <StudentSearchTerm student = {student} func = {this.props.func} />)}
            </div>
        )
    }
}