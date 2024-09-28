import React, { useState } from 'react'
import "./button.css"
const button = () => {
    const [count,setCount]=useState(0)
    // const [para,setPara]=useState('')

    function Next(){
        setCount(count+1)
    }
    function Previous(){
        setCount(count-1)
 }

    if(count>3){
        setCount(0)
    }
    if(count<0){

        setCount(3)
    }
    
     
    
  return (
    <>
    <div className="main">
    <div className={count===1?"active":'one'}>1
    <p>{}</p>

    </div>
    <div className={count===2?"active":'two'}>2
        <p>{}</p>
    </div>
    <div className={count===3?"active":'three'}>3
        <p></p>
    </div>
    </div>
    <p className='para'>
        {count===1?'Step:1 Learn React':""} {count===2?'Step:2 State ':""}{count===3?'Step:3 invest':""}
    </p>
    <button onClick={Previous}  className='btn'>Previous</button>
    <button onClick={Next} className='btn'>Next</button>


    </>
    
  )
}

export default button