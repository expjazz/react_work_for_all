import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Styled = styled.div.attrs({})``;
const CompanyUserPage = ({ users: { currentUser, company } }) => {
  console.log(company);
  console.log(currentUser);
  const a = 's';
  return (
    <div>
      Hello from the company
    </div>
  );
};

export default CompanyUserPage;
