import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import './Register.css'; // Import the external CSS

const Register = () => {
  return (
    <div className="register-page">
      <Container maxWidth="sm" className="register-container">
        <h1>Register</h1>
        <form className="register-form">
          <TextField label="Full Name" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Age" type="number" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Phone No." variant="outlined" fullWidth required margin="normal" />
          <TextField label="Aadhar Card No." variant="outlined" fullWidth required margin="normal" />
          <TextField label="Date of Birth" type="date" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Set Password" type="password" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Caste" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Religion" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Education" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Salary" type="number" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Address" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Job Specification" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Location" variant="outlined" fullWidth required margin="normal" />
          <Button variant="contained" color="primary" fullWidth className="register-button">
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
