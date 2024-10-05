import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios'; // Import axios for API calls
import './Register.css'; // Import the external CSS

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    aadhar: '',
    dob: '',
    password: '',
    caste: '',
    religion: '',
    education: '',
    salary: '',
    address: '',
    job: '',
    location: ''
  });

  const [message, setMessage] = useState(''); // For success/error messages

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData); // Send form data to backend
      setMessage(response.data.message); // Success message from backend
      console.log('User registered successfully:', response.data.user);
    } catch (error) {
      console.error('There was an error registering the user!', error);
      setMessage('Error registering user.');
    }
  };

  return (
    <div className="register-page">
      <Container maxWidth="sm" className="register-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Phone No."
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            label="Aadhar Card No."
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
          />
          <TextField
            label="Date of Birth"
            type="date"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <TextField
            label="Set Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Caste"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="caste"
            value={formData.caste}
            onChange={handleInputChange}
          />
          <TextField
            label="Religion"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="religion"
            value={formData.religion}
            onChange={handleInputChange}
          />
          <TextField
            label="Education"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
          />
          <TextField
            label="Salary"
            type="number"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <TextField
            label="Job Specification"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="job"
            value={formData.job}
            onChange={handleInputChange}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="register-button"
          >
            Register
          </Button>
        </form>
        {/* Display message after submission */}
        {message && <p className="message">{message}</p>}
      </Container>
    </div>
  );
};

export default Register;
