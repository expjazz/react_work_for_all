import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav.attrs({
  className: 'w-100 px-64',
})`
  background: ${props => props.theme.white};
`;

export default function Navbar() {
  return (
    <StyledNav>
      <div className="right">
        <Link to="/">
          About Us
        </Link>
        <Link to="/users/user">
          Candidate
        </Link>
        <Link to="/">
          Company
        </Link>
      </div>
    </StyledNav>
  );
}
