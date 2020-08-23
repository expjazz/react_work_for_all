import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledCandidateJobStats = styled.div.attrs({
  className: ' col-start-10 col-end-12 pt-48 hidden lg:block',

})`

  span {
    ${tw`text-gray-600 capitalize`}
  }

`;
const CandidateJobStats = () => {
  const { jobsApplied } = useSelector(state => state.users.currentUser.user);
  const { interviews } = useSelector(state => state.users);
  return (
    <StyledCandidateJobStats>
      <p className="text-gray-400 uppercase mb-8">
        Check your statistics
      </p>
      <div className="content">
        <p>

          <span>
            Number of Jobs Applied:
          </span>
          {jobsApplied ? jobsApplied.length : 0}
        </p>
        <p>
          <span>
            Number of interviews scheduled:
          </span>
          {interviews.length - 1}
        </p>
        <p>
          <span>
            Messages Received:
          </span>
          0
        </p>
      </div>

    </StyledCandidateJobStats>
  );
};

export default CandidateJobStats;
