import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import selectJobCandidates from '../../selectors/selectCandidateJobOffer';
import jobActions from '../../actions/job';
import userActions from '../../actions/users';
import PopUpInterview from '../interview/PopUpInterview';

const StyledJobShow = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',

})``;
const JobShow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dNone, setdNone] = useState(true);
  const { candidateApplyForJob } = jobActions;
  const { setUpInterviewCandidate } = userActions;
  const dispatch = useDispatch();
  const { selectJobDetailsToCandidate } = selectJobCandidates;
  const { url } = useRouteMatch();
  const list = url.split('/');
  const id = url.split('/')[list.length - 1];
  const job = useSelector(selectJobDetailsToCandidate(id));
  console.log('jjob');
  console.log(job);
  const handleShowPopup = () => {
    setdNone(false);
    setTimeout(() => setShowPopup(true), 300);
  };

  const hidePopUp = () => {
    setShowPopup(false);

    setTimeout(() => setdNone(true), 300);
  };
  const returnButton = () => {
    switch (job.status) {
      case 'approved':
        return <button type="button" onClick={handleShowPopup}>Set up a interview</button>;
      case 'pending':
        return <button type="button">Waiting for company</button>;
      default:
        return <button type="button" onClick={() => dispatch(candidateApplyForJob({ job_offer_id: job.jobId }))}>Apply for job</button>;
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
      <PopUpInterview show={showPopup} dNone={dNone} hide={hidePopUp} companyId={job.profileId} jobId={job.jobId} />
    </StyledJobShow>
  );
};

export default JobShow;
