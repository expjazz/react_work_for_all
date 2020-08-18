import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledLeft = styled.div.attrs({
  className: 'h-full',
})`
  background: ${props => props.theme.yellow};
`;
export const Left = () => (
  <StyledLeft>
    left
  </StyledLeft>
);

export default Left;
