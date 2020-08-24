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
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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
  return (
    <>
      <StyledCandidate>
        <div className="image">
          <img src={user.image} alt="" />

        </div>
        <div className="name">
          <h3>
            name:
            {' '}
            {user.name}
          </h3>
          email:
          {' '}
          {user.email}
          <p>
            header:
            {' '}
            {user.aboutMe}
          </p>
        </div>
        <div className="infoList">
          <p>personal info</p>
          { personalArr.map((info => (
            <p key={info}>
              {info}
              {' '}
              {user.personal[info]}
            </p>
          ))) }
        </div>
        <div className="addressList">
          <p>
            address
          </p>
          { addressArr.map(info => (
            <p key={info}>
              {info}
              {' '}
              :
              {' '}
              {user.address[info]}
              {' '}
            </p>
          ))}
        </div>
        <button type="button" onClick={acceptApplication}>Accept application</button>
      </StyledCandidate>
      <Table classes="col-start-7 col-end-12" title={user.name} user={newUser} iterator={iteratorTable} />
    </>
  );
};

export default Candidates;
