import React from 'react';
import {
    Button,
    Form, Input,
} from 'reactstrap';
import StudentSearchContainer from "./StudentSearchContainer";
import flowchart from "../images/VSEN Flowchart Version 9.1_2191 curriculum.jpeg";
import stu from "../images/student.JPG";

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

    printStudent() {
        var mywindow = window.open('', "PRINT");
        mywindow.document.write('<html lang="en"><head><title>' + document.title  + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>"Student Studentsen</h1>');
        mywindow.document.write(document.getElementById('studentPrint').innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close();
        mywindow.focus();

        mywindow.print();
        mywindow.close();
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
                        <div>
                            <div className="printer">
                                <Button id='print' type = "button" color='success' onClick={() => this.printStudent()}>Print</Button>
                            </div>
                            <div id='studentPrint' className='studentsen-info'>
                                <div className="student">
                                    <div className='student-picture'>
                                        <img className='stu' src={stu} alt='stu'/>
                                    </div>
                                    <div className="ta">
                                        <p>Name: Student Studentsen</p>
                                        <p>UID: 111111111</p>
                                        <p>DOB 1/1/2021</p>
                                        <p>Email: student@rit.edu</p>
                                        <p>Home Address: 123 Memorial Lomb Dr, Henrietta NY</p>
                                        <p>Phone Number: 585-555-5555</p>
                                        <p>Student Status: Undergrad</p>
                                        <p>Account Holds: None</p>
                                    </div>
                                </div>
                                <div className='flow-picture'>
                                    <img className='flowchart' src={flowchart} alt='flowchart' />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}