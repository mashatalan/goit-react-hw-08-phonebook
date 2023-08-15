import { AppBar, Toolbar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
