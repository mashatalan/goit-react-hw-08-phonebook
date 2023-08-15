import { Box, Typography } from '@mui/material';
import { LinkStyled } from './HomePage.styled';

function HomePage() {
  return (
    <Box
      sx={{
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        style={{ color: '#008080',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', paddingTop: '100px' }}
      >
        Welcome to the phone book
      </Typography>
      <Typography
        variant="h4"
        component="p"
        style={{ color: '#008080',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', paddingTop: '100px' }}
      >
        Please <LinkStyled to="/login">Log in</LinkStyled> to you cabinet or{' '}
        <LinkStyled to="/register">Register</LinkStyled> to work with your
        contacts
      </Typography>
    </Box>
  );
}

export default HomePage;
