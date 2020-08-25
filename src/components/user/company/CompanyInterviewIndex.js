import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import IndexInterviewStatus from '../../interview/IndexInterviewStatus';

import interviewSelectors from '../../../selectors/selectAllInterviews';

const StyledCompanyInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid grid-cols-3 gap-0 py-32',

})`

`;
const CompanyInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const newArr = [];
  let numberRows = newArr.length / 3;
  let str = '';
  while (numberRows > 0) {
    numberRows -= 1;
    str += '250px ';
  }
  const color = ['#97bf0f', '#ffb400', '#10bbb5', '#f72967'];
  if (allInterviews.length === 0) {
    return (
      <h5 className="col-start-3
  col-end-12 border-2 border-gray-300 rounded-lg text-center m-auto text-3xl grid grid-cols-3 gap-0 py-32"
      >
        You do not have any interviews yet
      </h5>
    );
  }
  allInterviews.forEach(interview => {
    const random = Math.floor(Math.random() * color.length);
    newArr.push(interview);
    newArr.push(color[random]);
  });
  let count = 0;
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
