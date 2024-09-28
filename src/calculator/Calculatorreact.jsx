import React, { useState } from 'react'
import "./calculator.css"
import { Flex } from 'antd'

function calculator () {
  const [input1,setInput1]=useState('')
  const [input2,setInput2]=useState('')
  const [operator,setOperator]=useState("+")
  const [result, setResult] =useState('')
  const[ac,setAc]=useState(false)

  function inputone(event){
    setInput1(event.target.value)
  }
  function inputtwo(event){
    setInput2(event.target.value)
  }
  function operatorone(event){
    setOperator(event.target.value)
    }
  function button(){
    let inp1=parseFloat(input1)
    let inp2=parseFloat(input2)
    setAc(true)
    if(operator=="+"){
      setResult(inp1+inp2) 
    }
    else if(operator=="-"){
      setResult(inp1-inp2)
      }
      else if(operator=="*"){
        setResult(inp1*inp2)
        }
        else if(operator=="/"){
            setResult(inp1/inp2)
        }
  }
  function Ac(){
    setInput1('')
    setInput2('')
    setOperator('+')
    setResult('')
    setAc(false)

  }

// console.log(input1);
// console.log(input2);

  return (
    <>
<div className='main' style={{display:Flex,justifyContent:'center',alignItems:'center',height:'400px'}}>
<div style={{margin:"5%"}}>
  <input type="number" value={input1} onChange={inputone} className='inputs' placeholder='Enter First Number'/>
  <input type="number" value={input2} onChange={inputtwo} className='inputs' placeholder='Enter Second Number'/>
  </div>
  <p>Choose The Operator</p>
  <select name="" id="" value={operator} onChange={operatorone} className='select'>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <button onClick={button} className='submit-btn'>Calculate</button>
  <div>
  <span><p>Ans:  {result}</p></span>{ac==true ?  <span>
    <button onClick={Ac} className='reset-btn'>Reset</button>
    </span>:""}


    </div>
  
  
</div>



    
    </>
  )
}

export default calculator