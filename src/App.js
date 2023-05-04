import React, { useState } from 'react'
import './App.css';
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
    <div className="Container" style={{height:"100vh"}}>
      <div>
        <h1 className='text-center' style={{fontSize: "50px"}}>{count} </h1>
        <div className="d-flex my-3">
          <button  onClick={handleIncrement} className='btn btn success '>Increment</button>
          <button  onClick={handleDecrement} className='btn btn primary'>Decrement</button>
        </div>
      </div>
    </div>
    
    
    )
    
    
  }
