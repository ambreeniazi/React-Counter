import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default  function Counter()

{
const [count, setCount] = useState(0);

  const handleIncrement=()=>{
    setCount(count+1)
  }

  const handleDecrement=()=>{
    if (count>0)
    setCount(count-1)
  }

   return(
    <div className="d-flex my -3 justify-content-center text-bg-secondary bg-opacity:0.5 align-items-center"  style={{height:"100vh"}}>
      <div>
        <h1 className='text-center' style={{fontSize: "50px"}}>{count} </h1>
        <div className="d-flex my-3">
          <button  onClick={handleIncrement} className='btn btn black border border-white me-1 text-bg-dark'>Increment</button>
          <button  onClick={handleDecrement} className='btn btn black  border border-white mr-1 text-bg-dark'>Decrement</button>
        </div>
      </div>
    </div>
    
    
    )
     }
