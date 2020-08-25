import React from 'react';
import styled from 'styled-components';
import Jumbotrom from '../components/home/Jumbotron';
import Navbar from '../components/Navbar';

const StyledContainer = styled.div.attrs({
  className: 'w-full',
})``;

export default function Home() {
  return (
    <StyledContainer>
      <Navbar />
      <Jumbotrom />
    </StyledContainer>
  );
}
