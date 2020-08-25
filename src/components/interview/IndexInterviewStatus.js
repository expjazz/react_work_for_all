import React from 'react';
import PropTypes from 'prop-types';

const IndexInterviewStatus = ({ image, classes, notImage }) => (
  <div className={classes.cont}>
    {notImage ? <img src={image} alt="" className={classes.img} /> : <div className={classes.img} style={{ background: image }} /> }
  </div>
);

export default IndexInterviewStatus;

IndexInterviewStatus.propTypes = {
  image: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(String).isRequired,
  notImage: PropTypes.bool.isRequired,
};
