import React from 'react';
import styled from 'styled-components';
import Carousel, { consts } from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import jobSelectors from '../../selectors/selectJobs';
import JobCardCompany from './JobCardCompany';
import JobCarousel from '../common/JobCarousel';

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
  const infoCandidates = true;
  return (
    <StyledCheckApplicants>
      <JobCarousel allJobs={allJobOffersFromUser} contentIfNone="You do not have any job offer" button={false} infoCandidates={infoCandidates} />
    </StyledCheckApplicants>

  );
};

export default CheckApplicants;
