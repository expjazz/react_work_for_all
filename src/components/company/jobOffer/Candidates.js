import React, { useState } from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import jobSelectors from '../../../selectors/selectCandidateJobOffer';
import jobActions from '../../../actions/job';
import Table from '../../common/Table';
import { updateJobSync, usersUpdateComp } from '../../../reducers/userSlice';

const StyledCandidate = styled.div.attrs({
  className: 'content col-start-2 col-end-6 pt-48',

})`
  .image {
    ${tw`w-full flex justify-center`}
    img {
      ${tw`w-48`}
    }
  }

  button {
    ${tw` text-white font-bold hover:bg-green-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline`}

    background: ${props => props.theme.green};
  }
`;
const Candidates = () => {
  const [redirectInterviews, setRedirectInterviews] = useState(false);
  const { acceptCandidate } = jobActions;
  const dispatch = useDispatch();
  const { selectJobOfferCandidate } = jobSelectors;
  const { url } = useRouteMatch();
  const arr = url.split('/');
  const ids = [arr[arr.length - 2], arr[arr.length - 1]];
  const interviews = useSelector(state => state.users.interviews);
  const user = useSelector(selectJobOfferCandidate(ids[0], ids[1]));
  const acceptApplication = () => {
    const newObj = {
      candidate_id: user.id,
      job_offer_id: user.jobId,

    };
    console.log(newObj);
    dispatch(usersUpdateComp(newObj));
    // dispatch(acceptCandidate(newObj));
  };
  const iteratorTable = [
    ...Object.keys(user.address), ...Object.keys(user.personal), 'email',
  ];
  const newUser = { ...user.personal, ...user.address, email: user.email };
  const renderButton = () => {
    const approved = user.job.approved.find(person => person.name === user.name);
    if (!approved) return <button type="button" onClick={acceptApplication}>Accept application</button>;
    const interviewInitiates = interviews.find(interview => interview
      .candidate_id === approved.id && interview.job_offer_id === user.jobId);
    if (interviewInitiates) {
      return <button type="button" onClick={() => setRedirectInterviews(true)}> Schedule the interview</button>;
    }
    return <button type="button"> Waiting for user to initiate interview </button>;
  };
  return (
    <>
      {redirectInterviews ? <Redirect to="/users/user/interviews/index" /> : ''}
      <StyledCandidate>
        <div className="image">
          <img src={user.image} alt="" />
        </div>
        <div className="aboutMe pt-12 mb-12">
          <p>
            {user.aboutMe}
          </p>
        </div>
        <div className="button text-center">

          {renderButton()}
        </div>
      </StyledCandidate>
      <Table classes="col-start-7 col-end-12" title={user.name} user={newUser} iterator={iteratorTable} />
    </>
  );
};

export default Candidates;
