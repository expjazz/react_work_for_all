import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';

const StyledCont = styled.div.attrs({
  className: 'w-full grid justify-center grid-flow-col',
})`
  a {
    color: red;
    ${tw`border-solid border-white border rounded-full w-48 flex justify-center content-center items-center`}
    :first-child {
      color: ${props => props.theme.white};
    }

    :last-child {
      background: ${props => props.theme.white};
      color: ${props => props.theme.green};
    }
  }
`;
const SignButtons = () => (
  <StyledCont>
    <Link to="/">
      Log in for more
    </Link>

    <Link to="/">
      Sign Up
    </Link>
  </StyledCont>
);

export default SignButtons;
