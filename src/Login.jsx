import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = ({ currentLang }) => {
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom>
        {currentLang.login.title}
      </Typography>
      <form>
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
  );
};

export default Login;
