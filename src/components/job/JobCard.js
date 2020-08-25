import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useRouteMatch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GreenButton from '../common/GreenButton';

const StyledJobCard = styled.div.attrs({
  className: 'shadow-lg max-sm-auto text-center ',
})`
:hover {
  transform: scaleY(1.01);
  transform: scale(1.01);
}

img {
  ${tw`w-32 h-32`}
}

.title {
  ${tw`uppercase text-center`}
}

span {
  ${tw`text-gray-400`}
}

}

`;
const JobCard = ({
  job: {
    position, requirement, salary, companyName, companyImage,
  }, index, button,
}) => {
  const { url } = useRouteMatch();

  return (
    <StyledJobCard>

      <div className="topImage flex justify-center">
        <img src={companyImage} alt="" />
      </div>
      <div className="title">

        {' '}
        {position}
      </div>
      <div className="middle flex flex-col text-center my-8">
        <p className="mb-8">
          <span>

            Requirement:
          </span>
          {' '}
          {requirement}

        </p>

        <p>
          <span>

            Salary:
          </span>
          {' '}
          {salary}
        </p>

        <p>
          <span>

            Company:
          </span>
          {' '}
          {companyName}
        </p>
      </div>
      { button ? (

        <Link to={`${url}/${index}`}>

          <GreenButton type="button">
            Check More
          </GreenButton>
        </Link>
      ) : ''}
    </StyledJobCard>
  );
};

export default JobCard;

JobCard.propTypes = {
  job: PropTypes.objectOf(String).isRequired,
  index: PropTypes.number.isRequired,
  button: PropTypes.bool.isRequired,
};

// job: {
//   position, requirement, salary, companyName, companyImage,
// }, index, button,
