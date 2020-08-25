import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useMediaQuery } from 'react-responsive';
import searchSelectors from '../../selectors/selectJobsPerQuery';
import arrows from '../common/GreenArrows';

const StyledShowJob = styled.div.attrs({
  className: 'mt-12',
})``;
const ShowJob = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 750px' });
  const isLarge = useMediaQuery({ query: '(min-width: 980px' });
  const query = useSelector(state => state.filters.positionQuery);
  const { selectJobsPerQuery } = searchSelectors;
  const allJobs = useSelector(selectJobsPerQuery(query));
  const rowNumber = () => {
    if (isLarge) return 3;
    if (isTablet) return 2;
    return 1;
  };
  return (
    <StyledShowJob>
      {allJobs.map}
      <div className="bg-white text-gray-700 rounded text-center">

        <div className="mt-6">
          <h1 className="text-xl text-blue-500 font-bold">
            Support
          </h1>
          <p className="mt-1 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <a href="#" className="no-underline">
          <div className="mt-8 p-2 bg-gray-200 text-gray-600 font-bold hover:bg-gray-300 hover:text-gray-700">
            Contact Support
          </div>
        </a>
      </div>
    </StyledShowJob>
  );
};

export default ShowJob;
