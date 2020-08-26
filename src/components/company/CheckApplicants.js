import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import jobSelectors from '../../selectors/selectJobs';
import JobCarousel from '../common/JobCarousel';

const StyledCheckApplicants = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid',
})`

`;

const CheckApplicants = () => {
  const { selectJobsFromCompany } = jobSelectors;

  const allJobOffersFromUser = useSelector(selectJobsFromCompany);
  const infoCandidates = true;
  return (
    <StyledCheckApplicants>
      <JobCarousel
        allJobs={allJobOffersFromUser}
        contentIfNone="You do not have any job offer"
        button={false}
        infoCandidates={infoCandidates}
      />
    </StyledCheckApplicants>

  );
};

export default CheckApplicants;
