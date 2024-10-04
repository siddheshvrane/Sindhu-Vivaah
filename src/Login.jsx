import React from 'react';
import { TextField, Button, Container} from '@mui/material';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
    <Container maxWidth="sm" className="login-container">
      <h1>Sign Up</h1>
      <form className="login-form">
        <TextField label="Email" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth required margin="normal" />
        <Button variant="contained" color="primary" fullWidth className="register-button">
          Sign Up
        </Button>
      </form>
    </Container>
  </div>
  );
};

export default Login;
