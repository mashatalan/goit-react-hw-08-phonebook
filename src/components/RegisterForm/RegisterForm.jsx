import { Button, TextField } from '@mui/material';
import { Form } from 'components/LogInForm/LoginForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        type="text"
        name="name"
        label="User name"
        required
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
          color: '#008080',
          backgroundColor: '#fffefe',
        }}
      />
      <TextField
        id="standard-basic"
        type="email"
        name="email"
        label="Email"
        required
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
          color: '#008080',
          backgroundColor: '#fffefe',
        }}
      />
      <TextField
        id="standard-basic"
        type="password"
        name="password"
        label="Password"
        required
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
          color: '#008080',
          backgroundColor: '#fffefe',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: '20px',
        }}
      >
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
