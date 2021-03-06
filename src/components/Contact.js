import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ListGroup, Badge, Col, Alert

} from 'reactstrap';

export default class Contact extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
           showAppointment: true,
           showConversations: true,
           messageSent: false,
           appointmentMade: false,
           advisorMessageNum: 1
       };
       this.hideComponent = this.hideComponent.bind(this);
   }

    hideComponent(name) {
        switch (name) {
            case 'showAppointment':
                this.setState({showAppointment: false});
                if (this.state.advisorMessageNum > 0) {
                    this.setState({advisorMessageNum: this.state.advisorMessageNum - 1});
                }
                break;
            case 'messageSent':
                this.setState({messageSent: false});
                break;
            case 'appointmentMade':
                this.setState({appointmentMade: false});
                break;
            default:
                this.setState(this.state);
        }
    }

    showComponent(name) {
        switch (name) {
            case 'showAppointment':
                this.setState({showAppointment: true});
                break;
            case 'messageSent':
                this.setState({messageSent: true});
                break;
            case 'appointmentMade':
                this.setState({appointmentMade: true});
                break;
            default:
                this.setState(this.state);
        }
    }

    appointment() {
        return (
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
                    <Input type="textarea" rows='3' name="text" id="meetingReason" />
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
                    <Label for="selectTime">Time</Label>
                    <Input type="select" name="select" id="selectTime">
                        <option>--:-- --</option>
                        <option>9:00 AM</option>
                        <option>9:15 AM</option>
                        <option>9:45 AM</option>
                        <option>10:15 AM</option>
                        <option>10:30 AM</option>
                        <option>11:00 AM</option>
                        <option>11:15 AM</option>
                        <option>11:30 AM</option>
                        <option>12:00 PM</option>
                        <option>12:15 PM</option>
                        <option>12:30 PM</option>
                        <option>12:45 PM</option>
                        <option>2:00 PM</option>
                        <option>2:15 PM</option>
                        <option>2:30 PM</option>
                        <option>3:00 PM</option>
                        <option>3:15 PM</option>
                        <option>3:30 PM</option>
                        <option>3:45 PM</option>
                        <option>4:15 PM</option>
                        <option>4:30 PM</option>
                    </Input>
                </FormGroup>
                <Button color='success' onClick={() => this.showComponent('appointmentMade')}>Submit</Button>
                <Alert style={{'margin-top': '1em'}} color='success' isOpen={this.state.appointmentMade} toggle={() => this.hideComponent('appointmentMade')}>Appointment Confirmed!</Alert>
            </Form>
        )
    }

    createNewMessage() {
        return (
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
                    <Input type="textarea" rows='5' name="message" id="message" />
                </FormGroup>
                <Button color='success' onClick={() => this.showComponent('messageSent')}>Send Message</Button>
                <Alert style={{'margin-top': '1em'}} color='success' isOpen={this.state.messageSent} toggle={() => this.hideComponent('messageSent')}>Message Sent!</Alert>
            </Form>
        );
    }

    replyToMessage() {
        return (
            <Form className='new-message'>
                <h2>Reply to Message</h2>
                <FormGroup row>
                    <Label for="recipient" sm={2}>To:</Label>
                    <Col sm={10}>
                        <Input type="title" name="recipient" id="recipient" placeholder='Advisor' disabled/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="subject" sm={2}>Subject:</Label>
                    <Col sm={10}>
                        <Input type="subject" name="subject" id="subject" placeholder='Registration' disabled/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input type="textarea" rows='5' name="message" id="message" />
                </FormGroup>
                <Button color='success' onClick={() => this.showComponent('messageSent')}>Reply</Button>
                <Alert style={{'margin-top': '1em'}} color='success' isOpen={this.state.messageSent} toggle={() => this.hideComponent('messageSent')}>Reply Sent!</Alert>

            </Form>
        );
    }

    render() {
       const {showAppointment} = this.state;
        return (
            <div>
                {showAppointment && (
                    <div className='contact'>
                        {this.appointment()}
                        <div className='convo-message'>
                            <ListGroup className='conversations'>
                                <h2>Conversations</h2>
                                <Button color='primary' onClick={() => {
                                    this.hideComponent("showAppointment");
                                    this.hideComponent('messageSent');
                                }}>
                                    Advisor <Badge pill>{this.state.advisorMessageNum} unread</Badge>
                                </Button>
                            </ListGroup>
                            {this.createNewMessage()}
                        </div>
                    </div>

                )}
                {!showAppointment && (
                    <div className='contact'>
                        <Form className='schedule-appointment'>
                            <Button className='back-button' color='secondary' onClick={() => {
                                this.showComponent("showAppointment");
                                this.hideComponent('messageSent');
                                this.hideComponent('appointmentMade');
                            }}>Back</Button>
                            <br/>
                            <h2>Selected Message</h2>
                            <FormGroup row>
                                <Label for="from" sm={2}>From:</Label>
                                <Col sm={10}>
                                    <Input type="from" name="from" id="from" placeholder='Advisor' disabled/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="subject" sm={2}>Subject:</Label>
                                <Col sm={10}>
                                    <Input type="subject" name="subject" id="subject" placeholder='Registration' disabled/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Message:</Label>
                                <Input type="textarea" rows='10' name="message" id="message" placeholder='Lorem ipsum dolor sit amet, temporibus contentiones vis ex. Et pri habeo simul. At eros aeque aperiri has, an eum eius libris eleifend. Id commodo quaeque molestiae qui, eos habeo integre reprimique et. Illum altera fuisset mel et, vocent nostrud vituperata ea usu. Usu feugiat argumentum ea, usu eu alii paulo insolens. Nec ad commodo discere, an persecuti scribentur accommodare mea, nam ad augue feugiat graecis. In pro primis nemore utroque, ea ius oratio soluta argumentum, mea apeirian volutpat pericula no. Mea ne praesent iracundia complectitur, te cibo explicari aliquando mea. Mei tibique scriptorem eloquentiam no, in mucius fabellas petentium sit, qui at erat tincidunt reformidans. Dicit maiestatis assueverit te usu, et inani vituperatoribus pro. Sed utamur torquatos mediocritatem cu.' disabled/>
                            </FormGroup>
                        </Form>
                        <div className='convo-message'>
                            <ListGroup className='conversations'>
                                <h2>Conversations</h2>
                                <Button color='primary'>
                                    Advisor <Badge pill>{this.state.advisorMessageNum} unread</Badge>
                                </Button>
                            </ListGroup>
                            {this.replyToMessage()}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}