import React from 'react';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import SearchTermContainer from "./SearchTermContainer";
export default class DegreePlanning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            searchRegistered: false,
            confirmation1: false,
            confirmation2: false,
            courses: [
                'UWRT-150',
                'CSCI-142',
                'SWEN-250',
                'MATH-182',
                'MATH-190'
            ],
            searchTerm: '',
            searchTermClicked: false,
            selectedCourse: '',
            recommendedClass: ''
        }
        this.hideComponent = this.hideComponent.bind(this);
        this.showComponent = this.showComponent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    search = () => {
        return this.state.courses.filter(course => course.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }

    showResults() {
        if (this.state.searchTerm.length > 0) {
            return (
                <SearchTermContainer courses = {this.search()} func = {this.showComponent} />
            )
        }
    }

    handleChange(e) {
        this.setState({recommendedClass: e.target.value});
    }

    showRecRegister() {
        if (this.state.recommendedClass.length > 0) {
            return (
                <Button id='confirm' type = "button" color='success' onClick={() => {this.confirmationToggle2()}}>Register</Button>
            )
        }
    }

    showComponent(name, course) {
        switch(name) {
            case 'registered':
                this.setState({registered: true});
                break;
            case 'searchRegistered':
                this.setState({searchRegistered: true});
                break;
            case 'confirmation':
                this.setState({confirm: true});
                break;
            case 'searchTermClicked':
                this.setState({searchTermClicked: true});
                this.setState({selectedCourse: course})
                break;
            default:
                this.setState(this.state);
        }
    }

    hideComponent(name) {
        switch(name) {
            case 'registered':
                this.setState({registered: false});
                break;
            case 'searchRegistered':
                this.setState({searchRegistered: false});
                break;
            case 'confirmation':
                this.setState({confirm: true});
                break;
            case 'searchTermClicked':
                this.setState({searchTermClicked: false});
                break;
            default:
                this.setState(this.state);
        }
    }

    confirmationToggle1() {
        this.setState({confirmation1: !this.state.confirmation1});
    }

    confirmationToggle2() {
        this.setState({confirmation2: !this.state.confirmation2});
    }

    render() {
        const {searchRegistered, registered, confirmation1, confirmation2, searchTermClicked} = this.state;
        return (
            <div className='degree-planning'>
                <div className='se-flowchart'>
                    <h2 style={{display: 'inline-block'}}>Degree Path/Flowchart</h2>
                    <p style={{color: 'red'}}>Completed Classes</p>
                    <p style={{color: 'limegreen'}}>Recommended Classes</p>
                    <img src={flowchart} alt='flowchart' />
                </div>
                <div className='degree-right'>
                    <div className='class-search'>
                        <h2>Class Search</h2>
                        {!searchTermClicked && (
                            <div>
                                <div id='search'>
                                    <Form>
                                        <Input type='search' name='search' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for classes' />
                                    </Form>
                                </div>
                                {this.showResults()}
                            </div>
                        )}
                        {searchTermClicked && (
                            <div className='search-results'>
                                <Form>
                                    <FormGroup>
                                        <Button color='secondary' onClick={() => {
                                            this.hideComponent('searchTermClicked');
                                            this.setState({searchTerm: ''});
                                        }}>Back</Button>
                                    </FormGroup>
                                    <FormGroup className='chosen-course'>
                                        <h4>Class to Enroll: </h4>
                                        <Button color='secondary' disabled>{this.state.selectedCourse}</Button>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button style={{'margin-top': '1em'}} id='confirm' type = "button" color='success' onClick={() => this.confirmationToggle1()}>Register</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        )}
                        <Modal isOpen={confirmation1} toggle={() => this.confirmationToggle1()}>
                            <ModalHeader toggle={() => this.confirmationToggle1()}>Confirm Registration</ModalHeader>
                            <ModalBody>Are you sure you want to register for {this.state.selectedCourse}?</ModalBody>
                            <ModalFooter>
                                <Button id='confirm' type = "button" color='success' onClick={() => {
                                    this.showComponent('searchRegistered');
                                    this.hideComponent('searchTermClicked');
                                    this.setState({searchTerm: ''});
                                    this.confirmationToggle1();
                                }}>Confirm</Button>
                                <Button color='danger' onClick={() => this.confirmationToggle1()}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Alert style={{'margin-top': '1em'}} color='success' isOpen={searchRegistered} toggle={() => this.hideComponent('searchRegistered')}>Successfully Registered!</Alert>
                    </div>
                    <Form className='recommended-classes'>
                        <h2>Recommended Classes</h2>
                        <FormGroup>
                            <Label for="selectClass">Select Recommended Class</Label>
                            <Input type='select' value={this.state.recommendedClass} name="select" id="selectClass" onChange={this.handleChange}>
                                <option value=''> </option>
                                <option value='SWEN-250'>SWEN-250</option>
                                <option value='CSCI-142'>CSCI-142</option>
                                <option value='MATH-182'>MATH-182</option>
                                <option value='MATH-190'>MATH-190</option>
                                <option value='UWRT-150'>UWRT-150</option>
                            </Input>
                        </FormGroup>
                        {this.showRecRegister()}
                        <Modal isOpen={confirmation2} toggle={() => this.confirmationToggle2()}>
                            <ModalHeader toggle={() => this.confirmationToggle2()}>Confirm Registration</ModalHeader>
                            <ModalBody>Are you sure you want to register for {this.state.recommendedClass}?</ModalBody>
                            <ModalFooter>
                                <Button id='confirm' type = "button" color='success' onClick={() => {
                                    this.setState({recommendedClass: ''});
                                    this.showComponent('registered');
                                    this.confirmationToggle2()
                                }}>Confirm</Button>
                                <Button color='danger' onClick={() => this.confirmationToggle2()}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Alert style={{'margin-top': '1em'}} color='success' isOpen={registered} toggle={() => this.hideComponent('registered')}>Successfully Registered!</Alert>
                    </Form>
                </div>
            </div>
        );
    }
}