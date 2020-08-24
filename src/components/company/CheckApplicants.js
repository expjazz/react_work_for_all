import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel, { consts } from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import JobCardCompany from './JobCardCompany';

const StyledCheckApplicants = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid content-center',
})``;

const StyledRightArrow = styled.div`
  background: ${props => props.theme.green};
  color: transparent;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 4rem;
  font-size: 3rem;
  height: 60px;
  display: grid;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;

  svg {
    stroke: ${props => props.theme.white};
    stroke-width: 30;
  }

`;

const StyledLeftArrow = styled.div`
  background: ${props => props.theme.green};
  color: transparent;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 4rem;
  font-size: 10px;
  height: 60px;
  display: grid;
  justify-content: flex-end;
  font-size: 3rem;
  padding-right: 1rem;
  align-items: center;

  svg {
    stroke: ${props => props.theme.white};
    stroke-width: 30;
  }

`;

const FinalButton = styled.button`
  background: transparent;

`;
const CheckApplicants = () => {
  const a = 'r';
  const arrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? (
      <StyledLeftArrow>
        <FontAwesomeIcon icon={faCaretLeft} />

      </StyledLeftArrow>
    ) : (
      <StyledRightArrow>
        <FontAwesomeIcon icon={faCaretRight} />

      </StyledRightArrow>
    );
    return (
      <FinalButton type="button" onClick={onClick}>
        {pointer}
      </FinalButton>
    );
  };
  const allJobOffersFromUser = useSelector(state => state.users.company.jobOffers);
  return (
    <StyledCheckApplicants>
      <Carousel renderPagination={({ pages, activePage, onClick }) => <></>} renderArrow={arrow}>
        {allJobOffersFromUser.map((job, index) => (
          <JobCardCompany key={job.id} job={job} index={index} />
        ))}
      </Carousel>
    </StyledCheckApplicants>

  );
};

export default CheckApplicants;
