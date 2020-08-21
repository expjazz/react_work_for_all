import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import selectJobCandidates from '../../selectors/selectCandidateJobOffer';

const StyledJobShow = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',

})``;
const JobShow = () => {
  const { selectJobDetailsToCandidate } = selectJobCandidates;
  const { url } = useRouteMatch();
  const list = url.split('/');
  const id = url.split('/')[list.length - 1];
  const job = useSelector(selectJobDetailsToCandidate(id));
  console.log(job);
  return (
    <StyledJobShow>
      lol
    </StyledJobShow>
  );
};

export default JobShow;
