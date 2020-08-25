import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelect from '../selectors/selectUserCandidate';

const StyledNav = styled.nav.attrs({
  className: 'w-100 lg:px-64 md:px-42 sm:px-16 px-8 flex justify-between',
})`
  background: ${props => props.theme.white};
`;

export default function Navbar() {
  const { currentUserInfo } = userSelect;
  const me = useSelector(currentUserInfo) || '';
  return (
    <StyledNav>
      <div className="right">

        <Link to="/companysignup">
          Company Sign Up
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
