import React from 'react';
import { AuthNavWrapper, Link } from './AuthNav.styled';

function AuthNav() {
  return (
    <AuthNavWrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </AuthNavWrapper>
  );
}

export default AuthNav;
