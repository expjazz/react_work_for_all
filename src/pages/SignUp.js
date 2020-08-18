import React from 'react';
import styled from 'styled-components';
import Left from '../components/signup/Left';
import Right from '../components/signup/Right';

const StyledSignUp = styled.div.attrs({
  className: 'w-full grid grid-flow-col h-screen',
})`

`;
const SignUp = () => (
  <StyledSignUp>
    <Left />
    <Right />
  </StyledSignUp>
);

export default SignUp;
