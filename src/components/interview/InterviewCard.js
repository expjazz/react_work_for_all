/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledInterviewCard = styled.div.attrs({
  className: 'grid',
})``;
const InterviewCard = ({
  interview: {
    id, status, companyId, candidateId, companyName, candidateName, jobOfferId, jobOfferPosition,
  },
}) => {
  console.log(status);
  return (
    <StyledInterviewCard>
      <p>
        company:
        {' '}
        {companyName}
      </p>
      <p>
        position:
        {' '}
        {jobOfferPosition}
      </p>
      <p>
        Status:
        {' '}
        {status}
      </p>
    </StyledInterviewCard>
  );
};

export default InterviewCard;

// id: interview.id,
// status: interview.status,
// companyId: interview.company.id,
// companyName: interview.company.name,
// candidateId: interview.candidate.id,
// candidateName: interview.candidate.name,
// jobOfferId: interview.job_offer.id,
// jobOfferPosition: interview.job_offer.position,
