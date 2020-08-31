import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Carousel, { consts } from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import JobCard from '../../components/job/JobCard';
import selectJobs from '../../selectors/selectJobs';

const StyledJobIndex = styled.div.attrs({
  className:
    'col-start-3 col-end-12 mx-10 m-auto h-full relative',
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
  outline: none;

  :focus {
    outline: none;
  }

`;

const JobsIndex = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 750px' });
  const isLarge = useMediaQuery({ query: '(min-width: 980px' });

  const rowNumber = () => {
    if (isLarge) return 3;
    if (isTablet) return 2;
    return 1;
  };

  const { selectAllJobs } = selectJobs;
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
  const allJobs = useSelector(selectAllJobs);
  if (allJobs.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">No job oportunity available</h3>;
  return (
    <StyledJobIndex>
      <div className="top text-center pt-24">
        <h3 className="text-3xl">

          {' '}
          Latest Job Offers
        </h3>
        <p className="text-gray-700">Choose a offer to apply</p>

      </div>
      <Carousel
        itemsToShow={rowNumber()}
        renderPagination={() => <></>}
        renderArrow={arrow}
      >
        {allJobs.map((job, index) => (
          <JobCard key={job.requirement} job={job} index={index} />
        ))}
      </Carousel>
    </StyledJobIndex>
  );
};

export default JobsIndex;
