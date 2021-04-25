import React from 'react';
import {Button} from "reactstrap";

export default class StudentSearchTerm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color='primary' onClick={() => this.props.func('searchTermClicked', this.props.student)}>{this.props.student}</Button>
            </div>
        )
    }
}