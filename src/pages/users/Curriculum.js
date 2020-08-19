import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import CurriculumForm from '../../components/user/CurriculumForm';

const StyledCurriculum = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',
})``;
const Curriculum = () => {
  const a = 's';
  return (
    <StyledCurriculum>
      <CurriculumForm />
    </StyledCurriculum>
  );
};

export default Curriculum;
