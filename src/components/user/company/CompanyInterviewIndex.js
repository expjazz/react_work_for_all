import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'react-elastic-carousel';
import { useSelector, useDispatch } from 'react-redux';

import userActions from '../../../actions/users';
import IndexInterviewStatus from '../../interview/IndexInterviewStatus';

import interviewSelectors from '../../../selectors/selectAllInterviews';
import InterviewCard from '../../interview/InterviewCard';

const StyledCompanyInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid grid-cols-3 gap-0 py-32',

})`

`;
const CompanyInterviewIndex = () => {
  const { updateInterviewStatus } = userActions;
  const dispatch = useDispatch();
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const company = true;
  const newArr = [];
  let numberRows = newArr.length / 3;
  let str = '';
  while (numberRows > 0) {
    numberRows -= 1;
    str += '250px ';
  }
  const color = ['#97bf0f', '#ffb400', '#10bbb5', '#f72967'];
  allInterviews.forEach(interview => {
    const random = Math.floor(Math.random() * color.length);
    newArr.push(interview);
    newArr.push(color[random]);
  });
  let count = 0;
  // const handleInterviewStatus = () => allInterviews.map((interview, index) => {
  //   if (interview.status.includes('waiting for confirmation from the company')) {
  //     interview.status = 'Candidate is waitin for you';
  //   }
  //   return (
  //     // <InterviewCard key={interview.id} interview={interview} index={index} companyPage={handleCompanyAwnser} />
  //   );
  // });
  return (
    <StyledCompanyInterviewIndex style={{ gridTemplateRows: str }}>
      {newArr.map((interview, index) => {
        count += 1;
        const infoOnHover = typeof interview === 'object' ? {
          candidate: interview.candidateName,
          position: interview.jobOfferPosition,
          time: interview.time,
          companyId: interview.companyId,
          candidateId: interview.candidateId,
          jobOfferId: interview.jobOfferId,
        } : false;
        return <IndexInterviewStatus key={count} infoOnHover={infoOnHover} image={typeof interview === 'object' ? interview.candidateImage : interview} notimage={index % 2 === 0} classes={{ cont: 'w-full', img: 'w-full h-full' }} />;
      })}
    </StyledCompanyInterviewIndex>
  );
};

export default CompanyInterviewIndex;
