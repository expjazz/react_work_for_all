import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledCompanyStats = styled.div.attrs({
  className: ' col-start-10 col-end-12 pt-48 hidden lg:block text-center px-4',

})``;
const CompanyStats = () => {
  console.log('object');
  return (
    <StyledCompanyStats>
      D
    </StyledCompanyStats>
  );
};

export default CompanyStats;
