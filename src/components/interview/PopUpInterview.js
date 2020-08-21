import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPopUpInterview = styled.div.attrs({
  className: 'bg-red-800 absolute',
})`
  height: 20rem;
  width: 40rem;
  top: 25%;
  left: 25%;

`;
const PopUpInterview = ({ show }) => {
  const a = 'ts';
  return (
    <StyledPopUpInterview>

      <div className={show ? 'opacity-100' : 'opacity-0'}>
        sd
      </div>
    </StyledPopUpInterview>
  );
};

export default PopUpInterview;
