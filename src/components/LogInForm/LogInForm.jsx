import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { Form } from './LoginForm.styled';

function LogInForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        type="email"
        name="email"
        id="standard-basic"
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
        type="password"
        name="password"
        id="standard-basic"
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
        Log In
      </Button>
    </Form>
  );
}

export default LogInForm;
