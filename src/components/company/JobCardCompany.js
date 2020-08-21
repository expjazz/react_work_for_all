import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledJobCardCompany = styled.div.attrs({
  className: 'rounded shadow-lg max-s h-full',

})``;
const JobCardCompany = ({
  job: {
    position, requirement, salary, candidates, id,
  },
}) => (
  <StyledJobCardCompany>

    <div className="title">
      Position:
      {' '}
      {position}
    </div>
    <div className="middle">
      <p>
        Requirement:
        {' '}
        {requirement}
        Salary:
        {' '}
        {salary}
      </p>
      <div className="candidates">
        Candidates:
        {
          candidates.map(candidate => (
            <>
              <p key={candidate.name}>{candidate.name}</p>

            </>
          ))
        }
      </div>
    </div>
  </StyledJobCardCompany>
);

export default JobCardCompany;
