import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import selectJobCandidates from '../../selectors/selectCandidateJobOffer';
import jobActions from '../../actions/job';
import PopUpInterview from '../interview/PopUpInterview';
import Table from '../common/Table';

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
    ${tw`hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}

    background: ${props => props.theme.green};
  }
`;
const JobShow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dNone, setdNone] = useState(true);
  const { candidateApplyForJob } = jobActions;
  const dispatch = useDispatch();
  const { selectJobDetailsToCandidate } = selectJobCandidates;
  const { url } = useRouteMatch();
  const list = url.split('/');
  const id = url.split('/')[list.length - 1];
  const { interviews } = useSelector(state => state.users);
  const job = useSelector(selectJobDetailsToCandidate(id));

  const handleShowPopup = () => {
    setdNone(false);
    setTimeout(() => setShowPopup(true), 300);
  };

  const hidePopUp = () => {
    setShowPopup(false);

    setTimeout(() => setdNone(true), 300);
  };
  const returnButton = () => {
    const interview = interviews.find(interview => interview.job_offer_id === job.jobId);
    switch (job.status) {
      case 'approved':
        if (!interview) return <button type="button" onClick={handleShowPopup}>Set up a interview</button>;
        if (interview && interview.status === 'waiting for confirmation from the company') return <button type="button">Waiting for company</button>;
        if (interview && interview.status === 'Accepted') return <button type="button">Attend your interview</button>;
        if (interview && interview.status === 'Company needs another time. Accept?') {
          return (
            <button type="button">Accept?</button>
          );
        }
        break;
      case 'pending':
        return <button type="button">Waiting for company</button>;
      default:
        return <button type="button" onClick={() => dispatch(candidateApplyForJob({ job_offer_id: job.jobId }))}>Apply for job</button>;
    }
    return '';
  };
  const iteratorTable = [
    'position', 'requirement', 'companyName',
  ];

  const { curriculum } = useSelector(state => state.users);

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

          {curriculum ? returnButton() : '' }

        </div>
        <PopUpInterview
          show={showPopup}
          dNone={dNone}
          hide={hidePopUp}
          companyId={job
            .profileId}
          jobId={job.jobId}
        />
      </StyledJobShow>
      <div className="rigth col-start-6 mr-8 col-end-12">
        <Table classes="col-start-7 col-end-12" title={job.companyName} user={job} iterator={iteratorTable} />
      </div>
    </>
  );
};

export default JobShow;
