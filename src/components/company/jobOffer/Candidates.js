import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jobSelectors from '../../../selectors/selectCandidateJobOffer';

const Candidates = () => {
  const { selectJobOfferCandidate } = jobSelectors;
  const { url } = useRouteMatch();
  const arr = url.split('/');
  const ids = [arr[arr.length - 1], arr[arr.length - 2]];
  const user = useSelector(selectJobOfferCandidate(ids[0], ids[1]));
  console.log(user);
  return (
    <div>
      something
    </div>
  );
};

export default Candidates;
