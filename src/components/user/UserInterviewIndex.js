import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import interviewSelectors from '../../selectors/selectAllInterviews';
import InterviewCard from '../interview/InterviewCard';

const StyledUserInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const UserInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  if (allInterviews.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">No Interviews Scheduled</h3>;
  return (
    <StyledUserInterviewIndex>
      <Carousel renderPagination={({ pages, activePage, onClick }) => <></>}>
        {allInterviews.map((interview, index) => (
          <InterviewCard key={interview.id} interview={interview} index={index} />
        ))}
      </Carousel>
    </StyledUserInterviewIndex>
  );
};

export default UserInterviewIndex;
