import React from 'react';
import styled from 'styled-components';

const StyledJumbotron = styled.div.attrs({
  className: 'w-100 px-64',
})``;

export default function Jumbotron() {
  return (
    <StyledJumbotron>
      Hello from jumbotron
    </StyledJumbotron>
  );
}
