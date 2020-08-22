import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import interviewSelectors from '../../selectors/selectAllInterviews';

const StyledUserInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const UserInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  console.log(allInterviews);
  return (
    <StyledUserInterviewIndex>
      a
    </StyledUserInterviewIndex>
  );
};

export default UserInterviewIndex;
