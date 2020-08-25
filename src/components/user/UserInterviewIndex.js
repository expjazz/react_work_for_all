import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import interviewSelectors from '../../selectors/selectAllInterviews';
import InterviewCard from '../interview/InterviewCard';
import IndexInterviewStatus from '../interview/IndexInterviewStatus';

const StyledUserInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const UserInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  console.log(allInterviews);
  if (allInterviews.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">No Interviews Scheduled</h3>;
  return (
    <StyledUserInterviewIndex>
      {allInterviews.map(interview => <IndexInterviewStatus image={interview.candidateImage} />)}
    </StyledUserInterviewIndex>
  );
};

export default UserInterviewIndex;
