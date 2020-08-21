import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import selectJobCandidates from '../../selectors/selectCandidateJobOffer';
import jobActions from '../../actions/job';

const StyledJobShow = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',

})``;
const JobShow = () => {
  const { candidateApplyForJob } = jobActions;
  const dispatch = useDispatch();
  const { selectJobDetailsToCandidate } = selectJobCandidates;
  const { url } = useRouteMatch();
  const list = url.split('/');
  const id = url.split('/')[list.length - 1];
  const job = useSelector(selectJobDetailsToCandidate(id));
  console.log(job);
  const returnButton = () => {
    switch (job.status) {
      case 'approved':
        return <button type="button">Set up a interview</button>;
      case 'pending':
        return <button type="button">Waiting for company</button>;
      default:
        return <button type="button" onClick={() => dispatch(candidateApplyForJob({ job_offer_id: job.id }))}>Apply for job</button>;
    }
  };
  return (
    <StyledJobShow>
      <p>
        company:
        {' '}
        {job.companyName}
      </p>
      {
        Object.keys(job).map(val => (
          <p key={val}>
            {' '}
            {val}
            :
            {' '}
            {job[val]}
          </p>
        ))
      }

      {returnButton() }
    </StyledJobShow>
  );
};

export default JobShow;
