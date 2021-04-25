import React from "react";
import CourseSearchTerm from "./CourseSearchTerm";

export default class CourseSearchContainer extends React.Component {
    render() {
        return (
            <div className='courses'>
                {this.props.courses.map(course => <CourseSearchTerm course = {course} func = {this.props.func} />)}
            </div>
        )
    }
}