import React from "react";
import SearchTerm from "./SearchTerm";

export default class SearchTermContainer extends React.Component {
    render() {
        return (
            <div className='courses'>
                {this.props.courses.map(course => <SearchTerm course = {course} func = {this.props.func} />)}
            </div>
        )
    }
}