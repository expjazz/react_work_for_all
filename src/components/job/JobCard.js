import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useRouteMatch, Link } from 'react-router-dom';

const StyledJobCard = styled.div.attrs({
  className: 'rounded shadow-lg max-s h-full',
})`
  button {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  }

`;
const JobCard = ({
  job: {
    position, requirement, salary, user, id,
  }, index,
}) => {
  const { url } = useRouteMatch();

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
      <Link to={`${url}/${index}`}>

        <button type="button"> Check More</button>
      </Link>
    </StyledJobCard>
  );
};

export default JobCard;
