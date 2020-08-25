import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';
import { useMediaQuery } from 'react-responsive';

const StyledCont = styled.div.attrs({
  className: 'w-full grid justify-around grid-flow-col pb-16 pt-8',
})`
  a {
    color: red;
    ${tw`border-solid border-white border rounded-full md:w-48 w-20 sm:w-32 lg:w-48 flex justify-center content-center items-center`}
    :first-child {
      ${tw`hover:bg-white hover:text-green-700 `}

      color: ${props => props.theme.white};
    }

    :last-child {
      ${tw`hover:bg-green-700 hover:text-white`}

      background: ${props => props.theme.white};
      color: ${props => props.theme.green};
    }
  }
`;
const SignButtons = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px' });

  return (
    <StyledCont>
      <Link to="/login" className="transition-all duration-700">

        {isTablet ? 'Log in' : 'Log in for more'}
      </Link>

      <Link to="/signup" className="transition-all duration-700">
        Sign Up
      </Link>

    </StyledCont>
  );
};

export default SignButtons;
