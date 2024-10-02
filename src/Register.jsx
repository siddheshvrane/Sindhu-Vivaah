import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Register.css';

const Register = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <div class="formheader">
      <h1>Register</h1>
      </div>
      <form>
        <TextField label="Full Name" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Age" type="number" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Phone No." variant="outlined" fullWidth required margin="normal" />
        <TextField label="Aadhar Card No." variant="outlined" fullWidth required margin="normal" />
        <TextField label="" type="date" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Set Password" type="password" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Caste" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Religion" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Education" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Salary" type="number" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Address" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Job Specification" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Location" variant="outlined" fullWidth required margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
