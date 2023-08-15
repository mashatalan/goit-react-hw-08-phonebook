import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  &.active {
    color: white;
    border: 3px solid plum;
    border-radius: 5px;
  }
`;
