import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ListGroupItem, ListGroup, Badge, Col

} from 'reactstrap';

function Contact() {
    return (
        <div className='contact'>
            <Form className='schedule-appointment'>
                <h2>Schedule an Appointment</h2>
                <FormGroup>
                    <Label for="selectAdvisor">Select Advisor/Professor</Label>
                    <Input type="select" name="select" id="selectAdvisor">
                        <option> </option>
                        <option>Advisor</option>
                        <option>Professor 1</option>
                        <option>Professor 2</option>
                        <option>Professor 3</option>
                        <option>Professor 4</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="meetingReason">Reason for Meeting</Label>
                    <Input type="textarea" name="text" id="meetingReason" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTime">Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                    />
                </FormGroup>
                <Button color='success'>Submit</Button>
            </Form>
            <div className='convo-message'>
                <ListGroup className='conversations'>
                    <h2>Conversations</h2>
                    <ListGroupItem tag='button' action>Advisor <Badge pill>3</Badge></ListGroupItem>
                    <ListGroupItem tag='button' action>Professor 3 <Badge pill>3</Badge></ListGroupItem>
                    <ListGroupItem tag='button' action>Professor 4 <Badge pill>3</Badge></ListGroupItem>
                </ListGroup>
                <Form className='new-message'>
                    <h2>Create a New Message</h2>
                    <FormGroup row>
                        <Label for="recipient" sm={2}>To:</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="recipient">
                                <option> </option>
                                <option>Advisor</option>
                                <option>Professor 1</option>
                                <option>Professor 2</option>
                                <option>Professor 3</option>
                                <option>Professor 4</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="subject" sm={2}>Subject:</Label>
                        <Col sm={10}>
                            <Input type="subject" name="subject" id="subject" placeholder='Subject' />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input type="textarea" name="message" id="message" />
                    </FormGroup>
                    <Button color='success'>Send Message</Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;