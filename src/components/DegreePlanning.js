import React from 'react';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ListGroup, Badge, Col
} from 'reactstrap';
function DegreePlanning() {
    return (

    <div>
        <div style={{display: 'flex'}} buffer = '100px'>
            <img className='flowchart' src={flowchart} alt='flowchart' width = '50%' />
            <Form className='recommended-classes' width = '25%'>
                        <h2>Recommended Classes</h2>
                        <FormGroup>
                            <Label for="selectClass">Select Recommended Class</Label>
                            <Input type="select" name="select" id="selectClass">
                                <option> </option>
                                <option>SWEN-250 </option>
                                <option>CSCI-142</option>
                                <option>MATH-182</option>
                                <option>MATH-190</option>
                                <option>UWRT-150</option>
                            </Input>
                        </FormGroup>
                        <Button id='confirm' type = "button" color='success' onclick='openForm()'>Register</Button>
                    </Form>
                    <Form className='class-search' width = '25%'>
                        <h2>Class Search</h2>
                        <FormGroup>
                            <Label for="classCode">Class Code</Label>
                            <Input type="textarea" name="classCode" id="classCode" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="selectClass">Select Searched Class</Label>
                            <Input type="select" name="select" id="selectClass">
                                <option> </option>
                                <option>UWRT-150 8:00AM - 9:00AM</option>
                                <option>CSCI-142 11:00AM - 12:PM</option>
                                <option>SWEN-250 12:15PM - 1:15PM</option>
                                <option>MATH-182 2:30PM - 3:30PM</option>
                                <option>MATH-190 5:15PM - 6:15PM</option>
                            </Input>
                        </FormGroup>
                        <Button id='confirm' type = "button" color='success' onclick='getClass()'>Register</Button>
                    </Form>
        </div>
            <div class = "modal" type = "modal" id="confirmPop">
                <span class="close">&times;</span>
                    <p>Are you sure you want to register for this class?</p>
             </div>
        </div>
    );
}

function openForm() {
  document.getElementById("confirmPop").style.display = "block";
}

function closeForm() {
  document.getElementById("confirmPop").style.display = "none";
}

function getClass() {
    var cCode = document.getElementById("classCode").value();
    alert(cCode);
}

export default DegreePlanning;