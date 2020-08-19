import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LeftL from '../components/login/LeftL';
import RightL from '../components/login/RightL';

const StyledLogin = styled.div.attrs({
  className: 'w-full grid grid-flow-col grid-cols-2 h-screen',

})``;
const Login = () => {
  const a = 'a';
  return (
    <StyledLogin>
      <LeftL />
      <RightL />
    </StyledLogin>
  );
};

export default Login;
