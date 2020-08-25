import React from 'react';
import styled from 'styled-components';
import InnerJumbotrom from './InnerJumbotrom';

const StyledJumbotron = styled.div.attrs({
  className: 'w-full  lg:px-64 md:px-42 sm:px-16 px-8',
})`
background:
  linear-gradient(
    -8deg,
    #a1c030e0,
    #a1c030e0
  ),
  url('homeBackJumb.jpg');
height: 300px;
color: ${props => props.theme.white};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

export default function Jumbotron() {
  return (
    <StyledJumbotron>
      <InnerJumbotrom />
    </StyledJumbotron>
  );
}
