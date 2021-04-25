import React from 'react';
import {Button} from "reactstrap";

export default class StudentSearchTerm extends React.Component {
    render() {
        if (this.props.student === 'Student Studentsen') {
            return (
                <div>
                    <Button color='primary' onClick={() => this.props.func('searchTermClicked', this.props.student)}>{this.props.student}</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <Button disabled color='primary' onClick={() => this.props.func('searchTermClicked', this.props.student)}>{this.props.student}</Button>
                </div>
            )
        }
    }
}