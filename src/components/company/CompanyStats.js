import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledCompanyStats = styled.div.attrs({
  className: ' col-start-10 col-end-12 pt-48 hidden lg:block text-center px-4',

})`
.joboffer {
  ${tw`pt-8 text-center`}
  .smallTitle {
    ${tw`text-gray-400`}
  }

  .title {
    ${tw`text-4xl`}
  }

  span {
    ${tw`text-gray-600 capitalize`}
  }
}

.title {
  h3 {
    ${tw`text-4xl`}
  }
}

span {
  ${tw`text-gray-600 capitalize`}
}

`;
const CompanyStats = () => {
  const allJobOffers = useSelector(state => state.users.company.jobOffers);
  const jobOffersNum = allJobOffers.length;
  let allCandidates = [];
  let allApproved = [];
  allJobOffers.forEach(vals => {
    allCandidates = [...allCandidates, ...vals.candidates];
    allApproved = [...allApproved, ...vals.approved];
  });

  return (
    <StyledCompanyStats>
      <p className="text-gray-400 uppercase mb-8">
        Check your statistics
      </p>
      <div className="content">
        <p>

          <span>
            Number of Candidates Applied
          </span>
          {allCandidates ? allCandidates.length : 0}
        </p>
        <p>
          <span>
            Number of candidates scheduled:
          </span>
          {allApproved ? allApproved.length : 0}
        </p>
        <p>
          <span>
            Messages Received:
          </span>
          0
        </p>
      </div>

    </StyledCompanyStats>
  );
};

export default CompanyStats;
