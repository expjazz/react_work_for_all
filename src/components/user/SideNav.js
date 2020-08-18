import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledSideNav = styled.div.attrs({
  className: 'col-start-1 col-end-4',
})``;
const SideNav = props => (
  <StyledSideNav>
    hey
  </StyledSideNav>
);

export default SideNav;
