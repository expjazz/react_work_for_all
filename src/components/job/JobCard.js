import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useRouteMatch, Link } from 'react-router-dom';

const StyledJobCard = styled.div.attrs({
  className: 'shadow-lg max-sm-auto text-center ',
})`
:hover {
  transform: scaleY(1.01);
  transform: scale(1.01);
}

.title {
  ${tw`uppercase text-center`}
}

span {
  ${tw`text-gray-400`}
}

button {
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
}

}

`;
const JobCard = ({
  job: {
    position, requirement, salary, companyName, companyImage,
  }, index,
}) => {
  const { url } = useRouteMatch();

  return (
    <StyledJobCard>

      <div className="topImage">
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

      </div>
      <Link to={`${url}/${index}`}>

        <button type="button"> Check More</button>
      </Link>
    </StyledJobCard>
  );
};

export default JobCard;
