import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const [inputs, setInputs] = useState({
    name: "",
    email: "", 
    password: ""
  })
  const [isSignUp, setisSignUp] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async (type = "login") => {
    const res = axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    }).catch((err) => console.log(err));

    const data = await res;
    console.log(data.data);
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignUp) {
      sendRequest("signup").then((data) => localStorage.setItem("userId", data.data.user?._id)).then(() => dispath(authActions.login())).then(() => navigate('/blogs')).then((data) => console.log(data))
    }else{
      sendRequest().then((data) => localStorage.setItem("userId", data.data.user?._id)).then(() => dispath(authActions.login())).then(() => navigate('/blogs')).then((data) => console.log(data))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display={"flex"}
          flexDirection={"column"}
          alignItems={'center'}
          justifyContent={'center'}
          boxShadow='0px 0px 20px #ccc'
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant='h4' padding={3} textAlign='center'>{isSignUp ? "Signup" : "Login"}</Typography>
          <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} placeholder='Email' margin='normal' />
          {isSignUp && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Username' margin='normal' />}
          <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='Password' margin='normal' />
          <Button type='submit' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>{isSignUp ? "Signup" : "Login"}</Button>
          <Button onClick={() => setisSignUp(!isSignUp)} sx={{ borderRadius: 3, marginTop: 3 }}>Change to {isSignUp ? 'Login' : 'Sign-Up'}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth