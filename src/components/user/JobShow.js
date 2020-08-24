import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import selectJobCandidates from '../../selectors/selectCandidateJobOffer';
import jobActions from '../../actions/job';
import userActions from '../../actions/users';
import PopUpInterview from '../interview/PopUpInterview';
import JobLeftTable from '../job/JobLeftTable';

const StyledJobShow = styled.div.attrs({
  className: 'content col-start-2 col-end-6 pt-10',

})`
  .image {
    ${tw`w-full flex justify-center`}
    img {
      ${tw`w-7/12 `}
    }
  }

  button {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  }
`;
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
  const keys = ['Requirement'];
  return (
    <>
      <StyledJobShow>
        <div className="image">
          <img src={job.companyImage} alt="" />

        </div>

        <div className="title text-center">
          <h5 className="text-3xl">
            {job.position}
          </h5>
        </div>
        <div className="btn text-center">

          {returnButton() }

        </div>
        <PopUpInterview show={showPopup} dNone={dNone} hide={hidePopUp} companyId={job.profileId} jobId={job.jobId} />
      </StyledJobShow>
      <div className="rigth col-start-6 mr-8 col-end-12">
        <JobLeftTable job={job} />
      </div>
    </>
  );
};

export default JobShow;
