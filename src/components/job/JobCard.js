import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import jobActions from '../../actions/job';

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
  }, applied,
}) => {
  const { url } = useRouteMatch();
  const { candidateApplyForJob, addAllJobs } = jobActions;
  const dispatch = useDispatch();
  const handleApplication = () => {
    if (!applied) {
      const newObj = {
        job_offer_id: id,
      };
      dispatch(candidateApplyForJob(newObj));
      dispatch(addAllJobs());
    } else {
      console.log('nothing');
    }
  };
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
      <Link to={`${url}/id`}>

        <button type="button"> Check More</button>
      </Link>
    </StyledJobCard>
  );
};

export default JobCard;
