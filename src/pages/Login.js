import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LeftL from '../components/login/LeftL';
import RightL from '../components/login/RightL';

const StyledLogin = styled.div.attrs({})``;
const Login = () => {
  const a = 'a';
  return (
    <div>
      <LeftL />
      <RightL />
    </div>
  );
};

export default Login;
