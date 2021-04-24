import React from "react";
import SearchTerm from "./SearchTerm";

export default class SearchTermContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.courses.map(course => <SearchTerm course = {course} />)}
            </div>
        )
    }
}