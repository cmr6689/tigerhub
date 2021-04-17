import React from 'react';
import stu from '../images/student.JPG';
import flowchart from '../images/VSEN Flowchart Version 9.1_2191 curriculum.jpg';
import print from '../images/printer.png';


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
            <div className="printer">
                <Button id='print' type = "button" color='success' onClick={() => window.print()}>Print</Button>
            </div>
            <div style={{display: 'flex'}} buffer = '100px'>
                <img className='flowchart' src={flowchart} alt='flowchart' width = '30%' />
                <div className="student">
                    <img className='stu' src={stu} alt='stu' width='25%'/>
                    <textarea id="stuInfo" name="stuInfo" readOnly={true}>
                        Name: Student Studentsen
                        UID: 111111111
                        DOB 1/1/2021
                        Email: student@rit.edu
                        Home Address: 123 Memorial Lomb Dr, Henrietta NY
                        Phone Number: 585-555-5555
                        Student Status: Undergrad
                    </textarea>
                </div>
                
                {/* <img className='printer' src={print} alt='printer' useMap='printBut'/>
                <map className='printBut' name="printBut" onClick={window.print()}>
                    <area shape="rect" coords="1860,960,1900,1000" alt="Printer"></area>
                </map> */}
            </div>
        </div>
    );

}
// function printPage(){
//     return window.print();
// }
export default StudentStudentsen;