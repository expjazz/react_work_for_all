import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

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
const CompanyStats = () => (
  <StyledCompanyStats>
    D
  </StyledCompanyStats>
);

export default CompanyStats;
