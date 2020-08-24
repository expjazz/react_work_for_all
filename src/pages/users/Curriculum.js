import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import CurriculumForm from '../../components/user/CurriculumForm';

const StyledCurriculum = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 transition-all duration-700',
})``;
const Curriculum = ({ toggler }) => {
  const a = 's';
  return (
    <StyledCurriculum className={`${toggler ? 'col-start-4 col-end-12' : 'col-start-3 col-end-12'}`}>
      <CurriculumForm />
    </StyledCurriculum>
  );
};

export default Curriculum;
