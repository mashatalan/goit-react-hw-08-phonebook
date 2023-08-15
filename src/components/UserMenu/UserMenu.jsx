import { Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { MenuWrapper } from './UserMenu.styled';

function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <Typography variant='body2' component='p'>
        Welcome, {user.name}
      </Typography>
      {/* <p>Welcome, {user.email}</p> */}
      <Button
        type='button'
        size='small'
        color='inherit'
        variant='outlined'
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </MenuWrapper>
  );
}

export default UserMenu;
