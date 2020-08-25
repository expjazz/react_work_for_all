import React from 'react';
import PropTypes from 'prop-types';

const IndexInterviewStatus = ({ image }) => (
  <div>
    <img src={image} alt="" />
  </div>
);

export default IndexInterviewStatus;

IndexInterviewStatus.propTypes = {
  image: PropTypes.string.isRequired,
};
