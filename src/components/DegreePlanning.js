import React from 'react';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import Search from 'react-search';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
export default class DegreePlanning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            searchRegistered: false,
            confirmation1: false,
            confirmation2: false
        }
        this.hideComponent = this.hideComponent.bind(this);
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {
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
        let classes = [
            {id: 0, value: 'UWRT-150 8:00AM - 9:00AM'},
            {id: 1, value: 'CSCI-142 11:00AM - 12:00PM'},
            {id: 2, value: 'SWEN-250 12:15PM - 1:15PM'},
            {id: 3, value: 'MATH-182 2:30PM - 3:30PM'},
            {id: 4, value: 'MATH-190 5:15PM - 6:15PM'}
        ]
        const {searchRegistered, registered, confirmation1, confirmation2} = this.state;
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
                        <div id='search'>
                            <Search items={classes}
                                    placeholder='Search for classes'
                                    maxSelected={1}
                                    multiple={false} />
                        </div>
                        <Button style={{'margin-top': '1em'}} id='confirm' type = "button" color='success' onClick={() => this.confirmationToggle1()}>Register</Button>
                        <Modal isOpen={confirmation1} toggle={() => this.confirmationToggle1()}>
                            <ModalHeader toggle={() => this.confirmationToggle1()}>Confirm Registration</ModalHeader>
                            <ModalBody>Are you sure you want to register for this class?</ModalBody>
                            <ModalFooter>
                                <Button id='confirm' type = "button" color='success' onClick={() => {
                                    this.showComponent('searchRegistered');
                                    this.confirmationToggle1()
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
                            <Input type="select" name="select" id="selectClass">
                                <option> </option>
                                <option>SWEN-250</option>
                                <option>CSCI-142</option>
                                <option>MATH-182</option>
                                <option>MATH-190</option>
                                <option>UWRT-150</option>
                            </Input>
                        </FormGroup>
                        <Button id='confirm' type = "button" color='success' onClick={() => this.confirmationToggle2()}>Register</Button>
                        <Modal isOpen={confirmation2} toggle={() => this.confirmationToggle2()}>
                            <ModalHeader toggle={() => this.confirmationToggle2()}>Confirm Registration</ModalHeader>
                            <ModalBody>Are you sure you want to register for this class?</ModalBody>
                            <ModalFooter>
                                <Button id='confirm' type = "button" color='success' onClick={() => {
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