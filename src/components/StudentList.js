import React from 'react';
import Student from "./Student";
//import props from "props"


function StudentList(props) {
    return (
        <div>
            {props.students.map(s => <Student key={s.id} name={s.name} />)}
        </div>
    );
    
}

export default StudentList;