import React from 'react';
import styled from 'styled-components';

const StyledJumbotron = styled.div.attrs({
  className: 'w-100 px-64',
})`
  background: url('homeBackJumb.jpg');
  height: 300px;
  color: ${props => props.theme.green};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Jumbotron() {
  return (
    <StyledJumbotron>
      Hello from jumbotron
    </StyledJumbotron>
  );
}
