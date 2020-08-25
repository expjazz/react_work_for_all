import React from 'react';
import styled from 'styled-components';
import Left from '../components/common/Left';
import Right from '../components/signup/Right';

const StyledSignUp = styled.div.attrs({
  className: 'w-full grid grid-flow-col grid-cols-1 h-screen md:grid-cols-2',
})`

`;
const SignUp = () => (
  <StyledSignUp>
    <Left message="Join to fill your dream home" color="yellow" />
    <Right />
  </StyledSignUp>
);

export default SignUp;
