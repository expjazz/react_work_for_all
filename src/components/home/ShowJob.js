import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import searchSelectors from '../../selectors/selectJobsPerQuery';

const StyledShowJob = styled.div.attrs({
  className: 'mt-12',
})``;
const ShowJob = () => {
  const query = useSelector(state => state.filters.positionQuery);
  const { selectJobsPerQuery } = searchSelectors;
  const allJobs = useSelector(selectJobsPerQuery(query));

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
        <button type="button" className="no-underline">
          <div className="mt-8 p-2 bg-gray-200 text-gray-600 font-bold hover:bg-gray-300 hover:text-gray-700">
            Contact Support
          </div>
        </button>
      </div>
    </StyledShowJob>
  );
};

export default ShowJob;
