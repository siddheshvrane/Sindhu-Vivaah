import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Login.css';

const Login = ({ currentLang }) => {
  return (
    <div className="login-page">
      <Container maxWidth="xs" className="login-container">
        <Typography variant="h5" align="center" gutterBottom>
          {currentLang.login.title}
        </Typography>
        <form className="login-form">
          <TextField
            label={currentLang.login.email}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label={currentLang.login.password}
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {currentLang.login.button}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
