import React from 'react';
import stu from '../images/student.jpg';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ListGroup, Badge, Col
} from 'reactstrap';

function StudentStudentsen() {
    return (
        <div>
            <div style={{display: 'flex'}} buffer = '100px'>
                <img className='stu' src={stu} alt='stu' width='25'/>
                <img className='flowchart' src={flowchart} alt='flowchart' width = '30%' />
                <textarea id="stuInfo" name="stuInfo" >
                    Name: Student Studentsen
                    UID: 111111111
                    DOB 1/1/2021
                    Email: student@rit.edu
                    Home Address: 123 Memorial Lomb Dr, Henrietta NY
                    Phone Number: 585-555-5555
                    Student Status: Undergrad
                </textarea>
            </div>
        </div>
    );
    
}

export default StudentStudentsen;