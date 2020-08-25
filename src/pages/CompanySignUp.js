import React from 'react';
import styled from 'styled-components';
import RightC from '../components/companysignup/RightC';
import Left from '../components/common/Left';

const StyledCompanySignUp = styled.div.attrs({
  className: 'w-full grid grid-flow-col grid-cols-2 h-screen',

})``;
const CompanySignUp = () => {
  const a = 12;
  return (
    <StyledCompanySignUp>
      <Left color="blue" message="Find the bests employees on the market" />
      <RightC />
    </StyledCompanySignUp>
  );
};

export default CompanySignUp;
