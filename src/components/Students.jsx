import React from 'react'
import ListGroup from "react-bootstrap/ListGroup"; 

const Students = ({students}) => {
  return (
    <ListGroup>
      {students.map((student) =>{
        return  <ListGroup.Item key={student}>{student}</ListGroup.Item>;
      })}
    </ListGroup>
  )
}

export default Students
