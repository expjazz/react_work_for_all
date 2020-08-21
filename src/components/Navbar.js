import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelect from '../selectors/selectUserCandidate';

const StyledNav = styled.nav.attrs({
  className: 'w-100 px-64 flex justify-between',
})`
  background: ${props => props.theme.white};
`;

export default function Navbar() {
  const { currentUserInfo } = userSelect;
  const me = useSelector(currentUserInfo) || '';
  return (
    <StyledNav>
      <div className="right">
        <Link to="/">
          About Us
        </Link>
        <Link to="/users/user">
          Candidate
        </Link>
        <Link to="/companysignup">
          Company
        </Link>
      </div>

      {me ? (
        <Link to="users/user">
          {me.name}
        </Link>
      ) : ''}
    </StyledNav>
  );
}
