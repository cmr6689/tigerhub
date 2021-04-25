import React from 'react';
import Student from "./Student";
//import props from "props"
import {
    Form, Input,
    NavLink
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import StudentSearchContainer from "./StudentSearchContainer";
import StudentStudentsen from "./StudentStudensen";


export default class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchTermClicked: false,
            students: [
                'Student Studentsen',
                'Lores Ipsum',
                'Zack Pepper',
                'Jeff Loepsk'
            ]
        }
        this.showComponent = this.showComponent.bind(this);
        this.hideComponent = this.hideComponent.bind(this);
    }

    showComponent(name) {
        switch(name) {
            case 'searchTermClicked':
                this.setState({searchTermClicked: true});
                break;
            default:
                this.setState(this.state);
        }
    }

    hideComponent(name) {
        switch(name) {
            case 'searchTermClicked':
                this.setState({searchTermClicked: false});
                break;
            default:
                this.setState(this.state);
        }
    }


    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    search = () => {
        return this.state.students.filter(student => student.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }

    showResults() {
        return (
            <StudentSearchContainer students = {this.search()} func = {this.showComponent} />
        )
    }

    render() {
        return (
            <div>
                {!this.state.searchTermClicked && (
                    <div className="studentList">
                        <div className='studentSearch'>
                            <h2>Student Search</h2>
                            <div id='search'>
                                <Form>
                                    <Input type='search' name='search' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for students' />
                                </Form>
                            </div>
                        </div>
                        <div className='studentSearchResults'>
                            <h2>Search Results</h2>
                            {this.showResults()}
                        </div>
                    </div>
                )}
                {this.state.searchTermClicked && (
                    <StudentStudentsen />
                )}
            </div>
        );
    }
}