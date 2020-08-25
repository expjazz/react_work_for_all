import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Jumbotrom from '../components/home/Jumbotron';
import Navbar from '../components/Navbar';
import searchSelectors from '../selectors/selectJobsPerQuery';
import JobCarousel from '../components/common/JobCarousel';

const StyledContainer = styled.div.attrs({
  className: 'w-full',
})``;

export default function Home() {
  const query = useSelector(state => state.filters.positionQuery);
  const { selectJobsPerQuery } = searchSelectors;
  const allJobs = useSelector(selectJobsPerQuery(query));

  return (
    <StyledContainer>
      <Navbar />
      <Jumbotrom />
      <JobCarousel allJobs={allJobs} contentIfNone="There are no jobs available in the moment" button={false} />
    </StyledContainer>
  );
}
