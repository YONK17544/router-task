import React, { useState} from 'react';
import {Button} from 'react-bootstrap';


const Counter = () => {
      const [count, setCount] = useState(0);

      const Increment = (e) =>{
         e.preventDefault();
         setCount(count + 1);
      }

      const Decrement = (e) =>{
         e.preventDefault();
         setCount(count - 1);
      }
      const Reset= (e) =>{
         e.preventDefault();
         setCount(0);
      }
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick = {Increment}>Increment</Button>
      <Button onClick = {Decrement}>Decrement</Button>
      <Button onClick = {Reset}>Reset</Button>
    </div>
  )
}

export default Counter
