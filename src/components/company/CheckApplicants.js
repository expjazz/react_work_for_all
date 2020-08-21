import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import JobCardCompany from './JobCardCompany';

const StyledCheckApplicants = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',
})``;
const CheckApplicants = () => {
  const a = 'r';
  console.log(a);
  const allJobOffersFromUser = useSelector(state => state.users.company.jobOffers);
  return (
    <StyledCheckApplicants>
      <Carousel renderPagination={({ pages, activePage, onClick }) => <></>}>
        {allJobOffersFromUser.map(job => (
          <JobCardCompany key={job.id} job={job} />
        ))}
      </Carousel>
    </StyledCheckApplicants>
  );
};

export default CheckApplicants;
