import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import interviewSelectors from '../../selectors/selectAllInterviews';
import InterviewCard from '../interview/InterviewCard';
import IndexInterviewStatus from '../interview/IndexInterviewStatus';

const StyledUserInterviewIndex = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid grid-cols-3 gap-0',

})``;
const UserInterviewIndex = () => {
  const { selectCandidateInterviews } = interviewSelectors;
  const allInterviews = useSelector(selectCandidateInterviews);
  const newArr = [];
  const color = ['#97bf0f', '#ffb400', '#f1f1f1', '#ffffff', '#10bbb5', '#f72967'];
  console.log(color);
  allInterviews.forEach(interview => {
    const random = color[Math.floor(Math.random() * color.length)];
    newArr.push(interview);
    newArr.push(color[random]);
  });
  console.log(allInterviews);
  if (allInterviews.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">No Interviews Scheduled</h3>;
  return (
    <StyledUserInterviewIndex>
      {newArr.map((interview, index) => {
        const a = '2';
        return <IndexInterviewStatus image={typeof interview === 'object' ? interview.candidateImage : interview} notImage={index % 2 === 0 ? true : null} classes={{ cont: 'w-full', img: 'w-full' }} />;
      })}
    </StyledUserInterviewIndex>
  );
};

export default UserInterviewIndex;
