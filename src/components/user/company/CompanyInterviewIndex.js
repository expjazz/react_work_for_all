import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';

import interviewSelectors from '../../../selectors/selectAllInterviews';
import InterviewCard from '../../interview/InterviewCard';

const StyledCompanyInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const CompanyInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const company = true;
  const handleInterviewStatus = () => allInterviews.map((interview, index) => {
    if (interview.status.includes('waiting for confirmation from the company')) {
      interview.status = 'Candidate is waitin for you';
    }
    return (
      <InterviewCard key={interview.id} interview={interview} index={index} />
    );
  });

  return (
    <StyledCompanyInterviewIndex>
      <Carousel renderPagination={({ pages, activePage, onClick }) => <></>}>
        {handleInterviewStatus()}
      </Carousel>
    </StyledCompanyInterviewIndex>
  );
};

export default CompanyInterviewIndex;
