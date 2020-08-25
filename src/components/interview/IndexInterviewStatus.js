import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledContainer = styled.div.attrs({})`
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
    <div className="text transition-all duration-700 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, numquam?
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
