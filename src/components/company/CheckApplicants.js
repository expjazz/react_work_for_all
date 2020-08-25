import React from 'react';
import styled from 'styled-components';
import Carousel, { consts } from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import jobSelectors from '../../selectors/selectJobs';
import JobCardCompany from './JobCardCompany';

const StyledCheckApplicants = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10 grid',
})`

`;

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
outline: none;

:focus {
  outline: none;
}

`;
const CheckApplicants = () => {
  const { selectJobsFromCompany } = jobSelectors;
  const arrow = ({ type, onClick }) => {
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
  const allJobOffersFromUser = useSelector(selectJobsFromCompany);
  return (
    <StyledCheckApplicants>
      <div className="top text-center pt-24">
        <h3 className="text-3xl">

          {' '}
          Latest Job Offers
        </h3>
        <p className="text-gray-700">Choose a offer to apply</p>

      </div>
      <Carousel renderPagination={() => <></>} renderArrow={arrow}>
        {allJobOffersFromUser.map((job, index) => (
          <JobCardCompany key={job.id} job={job} index={index} />
        ))}
      </Carousel>
    </StyledCheckApplicants>

  );
};

export default CheckApplicants;
