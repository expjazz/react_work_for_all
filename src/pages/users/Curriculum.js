import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CurriculumForm from '../../components/user/CurriculumForm';

const StyledCurriculum = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 transition-all duration-700',
})`
:hover {
  transform: scaleY(1.01);
  transform: scale(1.01);
}

`;
const Curriculum = ({ toggler }) => (
  <StyledCurriculum className={`${toggler ? 'col-start-4 col-end-12' : 'col-start-3 col-end-12'}`}>
    <CurriculumForm />
  </StyledCurriculum>
);

export default Curriculum;

Curriculum.propTypes = {
  toggler: PropTypes.bool.isRequired,
};
