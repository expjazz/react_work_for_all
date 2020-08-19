import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LeftC from '../components/companysignup/LeftC';
import RightC from '../components/companysignup/RightC';

const StyledCompanySignUp = styled.div.attrs({
  className: 'w-full grid grid-flow-col grid-cols-2 h-screen',

})``;
const CompanySignUp = () => {
  const a = 12;
  return (
    <StyledCompanySignUp>
      <LeftC />
      <RightC />
    </StyledCompanySignUp>
  );
};

export default CompanySignUp;
