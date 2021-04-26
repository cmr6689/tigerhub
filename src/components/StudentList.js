import React from 'react';
import {
    Form, Input,
} from 'reactstrap';
import StudentSearchContainer from "./StudentSearchContainer";

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
            <div className='student-list-page'>
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
                        {this.showResults()}
                    </div>
                </div>
                <div className='student-info'>
                    {this.state.searchTermClicked && (
                        <span>STUDENT STUDENTSEN GOES HERE</span>
                    )}
                </div>
            </div>
        );
    }
}