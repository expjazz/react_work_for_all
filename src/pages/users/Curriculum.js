import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledCurriculum = styled.div.attrs({
  className: 'col-start-3 col-end-12',
})``;
const Curriculum = () => {
  const a = 's';
  return (
    <StyledCurriculum>
      hey from curriculum
    </StyledCurriculum>
  );
};

export default Curriculum;
