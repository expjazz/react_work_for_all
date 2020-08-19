import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledLeftL = styled.div.attrs({
  className: 'h-full',
})`
  background: ${props => props.theme.red};
`;
const LeftL = () => {
  const a = 2;
  return (
    <StyledLeftL>
      StyledLeftL
    </StyledLeftL>
  );
};

export default LeftL;
