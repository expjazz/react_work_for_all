/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link, useRouteMatch } from 'react-router-dom';

const StyledJobCardCompany = styled.div.attrs({
  className: 'rounded shadow-lg max-s h-full',

})``;
const JobCardCompany = ({
  job: {
    position, requirement, salary, candidates,
  }, index,
}) => {
  const { path } = useRouteMatch();
  return (
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
          candidates.map((candidate, ind) => (
            <>
              <Link to={`${path}/${index}/${ind}`} key={candidate.name}>

                {candidate.name}
              </Link>

            </>
          ))
        }
        </div>
      </div>
    </StyledJobCardCompany>
  );
};

export default JobCardCompany;
