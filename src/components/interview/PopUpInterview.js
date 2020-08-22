import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPopUpInterview = styled.div.attrs({
  className: 'bg-red-800 absolute transition-all duration-700 ',
})`
  height: 20rem;
  width: 40rem;
  top: 25%;
  left: 25%;

`;
const PopUpInterview = ({ show, dNone }) => {
  const a = 'ts';
  return (
    <StyledPopUpInterview className={`${show ? 'opacity-100' : 'opacity-0'} ${dNone ? 'hidden' : 'block'}`}>

      <div>
        sd
        <button type="button">
          close
        </button>
      </div>
    </StyledPopUpInterview>
  );
};

export default PopUpInterview;

// onClick={() => dispatch(setUpInterviewCandidate({ company_id: job.profileId, job_offer_id: job.jobId }))}
