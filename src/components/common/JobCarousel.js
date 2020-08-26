import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Carousel, { consts } from 'react-elastic-carousel';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import arrows from './GreenArrows';

import JobCard from '../job/JobCard';

const StyledShowJob = styled.div.attrs({
  className: 'col-start-3 col-end-12 mx-10 m-auto h-full relative',
})``;
const JobCarousel = ({
  allJobs, contentIfNone, button, infoCandidates,
}) => {
  let count = Math.floor(Math.random() * 10000);
  console.log(count);
  const { StyledLeftArrow, StyledRightArrow, FinalButton } = arrows;
  const isTablet = useMediaQuery({ query: '(min-width: 750px' });
  const isLarge = useMediaQuery({ query: '(min-width: 980px' });

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
  const rowNumber = () => {
    if (isLarge) return 3;
    if (isTablet) return 2;
    return 1;
  };

  if (allJobs.length === 0) return <h3 className="col-start-3 col-end-12 border-2 border-gray-300 rounded-lg text-center pt-12 text-3xl w-full">{contentIfNone}</h3>;
  return (
    <StyledShowJob>
      <div className="top text-center pt-24">
        <h3 className="text-3xl">
          { infoCandidates ? 'Check the Candidates for your spots' : 'Latest Job Offers' }
          {' '}
        </h3>
        <p className="text-gray-700">
          {' '}
          {infoCandidates ? 'Choose a candidate to see the curriculum' : 'Choose a offer to apply'}
          {' '}
        </p>

      </div>
      <Carousel
        itemsToShow={rowNumber()}
        renderPagination={() => <></>}
        renderArrow={arrow}
      >
        {allJobs.map((job, index) => {
          count += 1;
          return (job ? (
            <JobCard
              key={count}
              job={job}
              index={index}
              infoCandidates={infoCandidates}
              button={button}
            />
          ) : '');
        })}
      </Carousel>
    </StyledShowJob>
  );
};

export default JobCarousel;

JobCarousel.propTypes = {
  allJobs: PropTypes.arrayOf(Object).isRequired,
  contentIfNone: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  infoCandidates: PropTypes.bool.isRequired,
};
