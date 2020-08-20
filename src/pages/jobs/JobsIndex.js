import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledJobIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const JobsIndex = () => {
  const a = 'a';
  return (
    <StyledJobIndex>
      hey from jobindex
    </StyledJobIndex>
  );
};

export default JobsIndex;
