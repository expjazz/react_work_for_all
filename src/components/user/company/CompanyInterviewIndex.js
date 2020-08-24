import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'react-elastic-carousel';
import { useSelector, useDispatch } from 'react-redux';

import userActions from '../../../actions/users';

import interviewSelectors from '../../../selectors/selectAllInterviews';
import InterviewCard from '../../interview/InterviewCard';

const StyledCompanyInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const CompanyInterviewIndex = () => {
  const { updateInterviewStatus } = userActions;
  const dispatch = useDispatch();
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const company = true;
  const handleCompanyAwnser = {
    update: (job_offer_id, company_id, candidate_id, status, time = null) => {
      const newObj = {
        job_offer_id, company_id, candidate_id, status,
      };
      if (time) dispatch({ ...newObj, time });
      dispatch(updateInterviewStatus(newObj));
    },
    company,
  };
  const handleInterviewStatus = () => allInterviews.map((interview, index) => {
    if (interview.status.includes('waiting for confirmation from the company')) {
      interview.status = 'Candidate is waitin for you';
    }
    return (
      <InterviewCard key={interview.id} interview={interview} index={index} companyPage={handleCompanyAwnser} />
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
