import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav.attrs({
  className: 'w-100',
})`
  background: ${props => props.theme.green};
`;

export default function Navbar() {
  return (
    <StyledNav>
      Navbar
    </StyledNav>
  );
}
