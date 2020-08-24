import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import jobSelectors from '../../../selectors/selectCandidateJobOffer';
import jobActions from '../../../actions/job';
import Table from '../../common/Table';

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
  const { acceptCandidate } = jobActions;
  const dispatch = useDispatch();
  const { selectJobOfferCandidate } = jobSelectors;
  const { url } = useRouteMatch();
  const arr = url.split('/');
  const ids = [arr[arr.length - 2], arr[arr.length - 1]];
  const user = useSelector(selectJobOfferCandidate(ids[0], ids[1]));
  const { personalArr, addressArr } = useSelector(state => state.users.infoArrays);
  console.log(user);
  const acceptApplication = () => {
    const newObj = {
      candidate_id: user.id,
      job_offer_id: user.jobId,

    };
    dispatch(acceptCandidate(newObj));
  };
  const iteratorTable = [
    ...Object.keys(user.address), ...Object.keys(user.personal), 'email',
  ];
  const newUser = { ...user.personal, ...user.address, email: user.email };
  const renderButton = () => {
    if (user.job.approved.find(person => person.name === user.name)) {
      return <button type="button"> Waiting for user to initiate interview </button>;
    }
    return <button type="button" onClick={acceptApplication}>Accept application</button>;
  };
  return (
    <>
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
