/* eslint-disable no-use-before-define */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import CompanyDetail from '../../../components/user/company/CompanyDetail';
import SideNav from '../../../components/user/SideNav';
import CompanyEdit from './CompanyEdit';
import NewJobOpp from '../../../components/user/company/NewJobOpp';
import CheckApplicants from '../../../components/company/CheckApplicants';

const StyledCompanyUserPage = styled.div.attrs({
  className: 'grid',

})``;
const CompanyUserPage = ({ users: { currentUser, company } }) => {
  const { path, url } = useRouteMatch();
  const handleActiveCol = url => {
    if (url.includes('edit')) {
      setColTwo({ ...colTwo, active: true });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
    } else if (url.includes('opportunities/new')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: true });
      setColFour({ ...colFour, active: false });
    } else if (url.includes('opportunities/candidates')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: true });
    } else {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: true });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
    }
  };
  const [colOne, setColOne] = useState({
    path: url, text: currentUser.user.name, active: true, handleClick: handleActiveCol,
  });
  const [colTwo, setColTwo] = useState({
    path: `${path}/edit`, text: 'Edit your info', active: false, handleClick: handleActiveCol,
  });
  const [colThree, setColThree] = useState({
    path: `${path}/opportunities/new`, text: 'Create a new job opportunity', active: false, handleClick: handleActiveCol,
  });
  const [colFour, setColFour] = useState({
    path: `${path}/opportunities/candidates`, text: 'Check the candidates for your spots', active: false, handleClick: handleActiveCol,

  });

  return (
    <div>
      <StyledCompanyUserPage>
        <SideNav
          colOne={colOne}
          colTwo={colTwo}
          colThree={colThree}
          colFour={colFour}
          handleClick={handleActiveCol}
        />
        <Switch>
          <Route exact path={`${path}/`}>
            <CompanyDetail currentUser={currentUser} companyInfo={company} />
          </Route>
          <Route path={`${path}/edit`}>
            <CompanyEdit />
          </Route>
          <Route path={`${path}/opportunities/new`}>
            <NewJobOpp />
          </Route>
          <Route exact path={`${path}/opportunities/candidates/:jobId/:candidateId`}>
            <p>name</p>
          </Route>
          <Route path={`${path}/opportunities/candidates`}>
            <CheckApplicants />
          </Route>

        </Switch>
      </StyledCompanyUserPage>
    </div>
  );
};

export default CompanyUserPage;

CompanyUserPage.propTypes = {
  users: PropTypes.object.isRequired,
};
