// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./login.css"
// function login() {
//     const navigate =useNavigate();
//     const [userName,setUserName]=useState('')
//     const [password,setPassword]=useState('')

//     function userValue(event){
//         setUserName(event.target.value)
//     }
//     function passwordValue(e){
//         setPassword(e.target.value)
//     }
//     function submitBtn(){
//         if(userName=='baeed'&&password=="baeed123"){
//             navigate('layout')
//         }
//         else{
//             alert('Invalid Password or UserName')
//         }
//     }
//   return (
//     <>

//     <div style={{
//         width:"400PX",
//         height:"300px",
//         // display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         // height:'100vh',
//         flexDirection: 'column',
//         // gap:'40px',
//         border:'1px solid black',
//         marginTop:"10%",
//         marginLeft:"40%"

//     }}>
//         <p className='p-hea'>Login Form</p>
//         {/* <p>Enter UserName</p> */}
//         <input type="text" value={userName} onChange={userValue} className='inputs' placeholder='UserName'/>
//         {/* <p>Enter Password</p> */}

//         <input type="password" value={password} onChange={passwordValue} className='inputs' placeholder='Password' />
//         <button onClick={submitBtn} style={{
//             // marginTop:"20px"
//         }} className='sub-btn' >SUBMIT</button>
//     </div>
//     </>
//   )
// }

// export default login

import React from 'react';
import { Button, Checkbox, Form, Input,Alert  } from 'antd';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === 'baeed' && values.password === 'baeed123') {
      navigate('/layout'); // Navigate to the layout page
    } else {
  <Alert
  message="Error"
  description="This is an error message about copywriting."
  type="error"
  showIcon
/>
      alert('wrong username or password')
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <>
    <Nav/>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width:"100%",
        padding: '20px',
        
    }}>
        
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            backgroundColor: 'grey',
            border:"1px solid black",
            height:"40%",
            boxShadow:"5px 5px 15px black"
            
        }}>
    <Form
      name="basic"
    //   className='main'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <p style={{
            fontWeight:"600"
        }}>baeed/baeed123</p>
      <Form.Item
        label="Username"
        name="username"
        
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </>
  );
};

export default Login;
