import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import PropTypes from 'prop-types';
import theme from '../theme';

const StyledLeft = styled.div.attrs({
  className: 'h-full hidden md:block',
})`
  h3 {
    font-family: 'Pacifico', cursive;
  }

`;
export const Left = ({ message, color }) => (
  <StyledLeft style={{ backgroundColor: theme[color] }}>
    <div className="title pl-16 pt-16">
      <h3 className="text-3xl">

        Work For All
      </h3>
      <h6 className="text-2xl">
        {message}
      </h6>
    </div>
  </StyledLeft>
);

export default Left;

Left.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
