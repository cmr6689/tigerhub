import React from 'react';
import {Button} from "reactstrap";

export default class SearchTerm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color='primary' onClick={() => this.props.func('searchTermClicked', this.props.course)}>{this.props.course}</Button>
            </div>
        )
    }
}