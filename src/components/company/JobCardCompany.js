/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link, useRouteMatch } from 'react-router-dom';

const StyledJobCardCompany = styled.div.attrs({
  className: 'rounded shadow-lg max-s h-full m-auto',

})`

  .title {
    ${tw`uppercase text-center`}
  }

  p {
    ${tw`text-gray-400`}
  }
`;
const JobCardCompany = ({
  job, index,
}) => {
  const {
    position, requirement, salary, candidates,
  } = job;
  const { path } = useRouteMatch();
  return (
    <StyledJobCardCompany>

      <div className="topImage">
        <img src={job.image} alt="" />
      </div>

      <div className="title">

        {position}
      </div>
      <div className="middle grid text-center">
        <p>
          Requirement:
          {' '}
          {requirement}

        </p>

        <p>
          Salary:
          {' '}
          {salary}
        </p>
        <div className="candidates pt-16">
          <p>
            Candidates:

          </p>
          <div className="list grid">

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
      </div>
    </StyledJobCardCompany>
  );
};

export default JobCardCompany;
