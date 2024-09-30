import React, { useState } from 'react';
import { Button, Checkbox, Form, Input,Alert, message  } from 'antd';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState([])
  const   onFinish = async (values) => {
    setLoading(['true'])
    const loginResponse = await loginUser(values)
    console.log('loginResponse',loginResponse);
    if(loginResponse==="success"){
      navigate('/layout')
    }
    else{
      message.error('Invalid UserName or Password')
    }
    console.log('Success:', values);
  //   if (values.username === 'baeed' && values.password === 'baeed123') {
  //     localStorage.setItem('isAuth', true);
  //     navigate('/layout'); // Navigate to the layout page
  //   } else {
  // <Alert message="Error"description="This is an error message about copywriting."
  // type="error"
  // showIcon/>
  //     alert('wrong username or password')
  //   }
  };
  const onFinishFailed = (errorInfo) => {
  };
  async function loginUser(values) {
    const url = "https://fakestoreapi.com/auth/login";
    const{username,password}=values
    try {
      setLoading([])
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          "content-type":"application/json"},
        body:JSON.stringify({
          username,
          password 
      })

      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      const {token} =json;
      localStorage.setItem('isAuth' ,token)
      console.log(json);
      return "success";
    } catch (error) {
      setLoading([])

      console.error(error.message);
      return error.message
    }
  }
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
        }}>mor_2314/83r5^_</p>
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
        <Button type="primary" htmlType="submit" loading={loading[0]} >
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </>
  );
};

export default Login;
