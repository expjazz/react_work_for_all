import React from 'react';
import styled from 'styled-components';
import RightL from '../components/login/RightL';
import Left from '../components/common/Left';

const StyledLogin = styled.div.attrs({
  className: 'w-full grid grid-flow-col grid-cols-2 h-screen',

})``;
const Login = () => (
  <StyledLogin>
    <Left color="red" message="Sign in to get closer to your dream" />
    <RightL />
  </StyledLogin>
);

export default Login;
