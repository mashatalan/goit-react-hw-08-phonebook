import { useAuth } from 'hooks/useAuth';
import { Link, NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavWrapper>
  );
};
