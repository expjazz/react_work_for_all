import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import StyledGreenButton from '../common/GreenButton';

const StyledContainer = styled.div.attrs({
})`
position: relative;

.text {
  position: absolute;
  ${tw`h-full w-full opacity-0 hover:opacity-100 bg-gray-600 text-white`}
  :hover {
    background: #000000a3;
  }
}
`;

const IndexInterviewStatus = ({
  image, classes, notimage, infoOnHover,
}) => (notimage ? (
  <StyledContainer>
    <div className="text transition-all duration-700 flex flex-col justify-between h-full">
      <div className="content">

        {Object.keys(infoOnHover).map(val => (
          <p key={val}>
            {' '}
            {val}
            :
            {' '}
            {infoOnHover[val]}
            {' '}
          </p>
        ))}
      </div>
      <StyledGreenButton type="button">
        See More
      </StyledGreenButton>
    </div>
    <img src={image} alt="" className={`${classes.img} `} />
  </StyledContainer>
)
  : (
    <div className={`${classes.cont}`} style={{ backgroundColor: image }}>
      <div className={classes.img} style={{ background: `${image}` }} />
    </div>
  ));

export default IndexInterviewStatus;

IndexInterviewStatus.propTypes = {
  image: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(String).isRequired,
  notimage: PropTypes.bool.isRequired,
  infoOnHover: PropTypes.oneOfType([
    PropTypes.objectOf(String), PropTypes.bool,
  ]).isRequired,
};
