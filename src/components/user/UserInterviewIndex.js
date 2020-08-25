import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import interviewSelectors from '../../selectors/selectAllInterviews';
import InterviewCard from '../interview/InterviewCard';
import IndexInterviewStatus from '../interview/IndexInterviewStatus';
import PopUpInterview from '../interview/PopUpInterview';

const StyledUserInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid grid-cols-3 gap-0',

})``;
const UserInterviewIndex = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dNone, setdNone] = useState(true);
  const [infoDispatch, setInfoDispatch] = useState(false);

  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const newArr = [];
  const color = ['#97bf0f', '#ffb400', '#10bbb5', '#f72967'];
  allInterviews.forEach(interview => {
    const random = Math.floor(Math.random() * color.length);
    newArr.push(interview);
    newArr.push(color[random]);
  });
  let count = 0;
  const infoToDispatch = false;

  console.log(newArr);
  if (allInterviews.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">No Interviews Scheduled</h3>;
  return (
    <StyledUserInterviewIndex>
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

    </StyledUserInterviewIndex>
  );
};

export default UserInterviewIndex;
