import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledJobCard = styled.div.attrs({
  className: 'rounded shadow-lg max-s',
})``;
const JobCard = ({
  job: {
    position, requirement, salary, user,
  },
}) => {
  const positiosn = 'developer';
  return (
    <StyledJobCard>
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
        <div className="companny">
          Company:
          {' '}
          {user.profile.name}
        </div>
      </div>
    </StyledJobCard>
  );
};

export default JobCard;
