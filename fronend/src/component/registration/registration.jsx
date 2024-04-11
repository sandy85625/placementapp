import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
    User_Name: '',
    Password_Hash: '',
    Email: '',
    Role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users', formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Registration</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="User_Name" value={formData.User_Name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Enter role" name="Role" value={formData.Role} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="Email" value={formData.Email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="Password_Hash" value={formData.Password_Hash} onChange={handleChange} />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Registration;