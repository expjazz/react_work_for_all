import React from 'react';
import styled from 'styled-components';
import CompanyEditForm from './CompanyEditForm';

const StyledCompanyEdit = styled.div.attrs({
  className: 'col-start-3 col-end-12 border-2 border-gray-300 rounded-lg mx-10',

})``;
const CompanyEdit = () => (
  <StyledCompanyEdit>
    <CompanyEditForm />
  </StyledCompanyEdit>
);

export default CompanyEdit;
