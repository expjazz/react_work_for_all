/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInterviewCard = styled.div.attrs({
  className: 'grid',
})``;
const InterviewCard = ({
  interview: {
    id, status, companyId, candidateId,
    companyName, candidateName, jobOfferId, jobOfferPosition, time,
  }, companyPage,
}) => {
  const companyButtons = () => {
    if (companyPage) {
      return (
        <div className="buttons">
          <button
            type="button"
            onClick={() => companyPage.update(jobOfferId,
              companyId, candidateId, 'Accepted')}
          >
            Accept

          </button>
          <button
            type="button"
            onClick={() => companyPage.update(jobOfferId,
              companyId, candidateId, 'Waiting for the candidate', time)}
          >
            Suggest Another time

          </button>

        </div>
      );
    }
    return '';
  };
  return (
    <StyledInterviewCard>
      <p>
        company:
        {' '}
        {companyName}
      </p>
      <p>
        position:
        {' '}
        {jobOfferPosition}
      </p>
      <p>
        Status:
        {' '}
        {status}
      </p>

      <p>
        time:
        {' '}
        {time}
      </p>

      {companyButtons()}

    </StyledInterviewCard>
  );
};

export default InterviewCard;
InterviewCard.propTypes = {
  interview: PropTypes.objectOf(String).isRequired,
  companyPage: PropTypes.objectOf(Function).isRequired,
};
