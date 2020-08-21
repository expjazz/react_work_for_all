import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import JobCard from '../../components/job/JobCard';

const StyledJobIndex = styled.div.attrs({
  className:
    'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 m-auto h-56',
})``;
const JobsIndex = () => {
  const email = useSelector(state => state.users.currentUser.user.generalInfo.email);
  const allJobs = useSelector(state => state.jobOffers.index.all);
  if (allJobs.length === 0) return <p>loading</p>;
  return (
    <StyledJobIndex>
      <Carousel renderPagination={({ pages, activePage, onClick }) => <></>}>
        {allJobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </Carousel>
    </StyledJobIndex>
  );
};

export default JobsIndex;
