import React from 'react';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import Search from 'react-search';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ListGroup, Badge, Col
} from 'reactstrap';
function DegreePlanning() {
    let classes = [
        {id: 0, value: 'UWRT-150 8:00AM - 9:00AM'},
        {id: 1, value: 'CSCI-142 11:00AM - 12:00PM'},
        {id: 2, value: 'SWEN-250 12:15PM - 1:15PM'},
        {id: 3, value: 'MATH-182 2:30PM - 3:30PM'},
        {id: 4, value: 'MATH-190 5:15PM - 6:15PM'}
    ]
    return (

        <div className='degree-planning'>
            <div className='degree-left'>
                <div className='se-flowchart'>
                    <h2 style={{display: 'inline-block'}}>Degree Path/Flowchart</h2>
                    <p style={{color: 'red'}}>Completed Classes</p>
                    <p style={{color: 'limegreen'}}>Recommended Classes</p>
                    <img src={flowchart} alt='flowchart' />
                </div>
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
            </div>
            <div className='class-search'>
                <h2>Class Search</h2>
                <div id='search'>
                    <Search items={classes}
                            placeholder='Search for classes'
                            maxSelected={1}
                            multiple={false} />
                </div>
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

function getClass(id) {
    alert('class selected');
}

export default DegreePlanning;