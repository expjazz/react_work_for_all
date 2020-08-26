/* eslint-disable no-use-before-define */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  useRouteMatch, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import CompanyDetail from '../../../components/user/company/CompanyDetail';
import SideNav from '../../../components/user/SideNav';
import CompanyEdit from './CompanyEdit';
import NewJobOpp from '../../../components/user/company/NewJobOpp';
import CheckApplicants from '../../../components/company/CheckApplicants';
import Candidates from '../../../components/company/jobOffer/Candidates';
import CompanyInterviewIndex from '../../../components/user/company/CompanyInterviewIndex';

const StyledCompanyUserPage = styled.div.attrs({
  className: 'sm:grid flex flex-col',

})``;
const CompanyUserPage = ({ users: { currentUser, company } }) => {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  const [firstTime, setFirstTime] = useState(true);
  const isTablet = useMediaQuery({ query: '(max-width: 768px' });
  const handleActiveCol = url => {
    if (url.includes('edit')) {
      setColTwo({ ...colTwo, active: true });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
      setColFive({ ...colFive, active: false });
    } else if (url.includes('opportunities/new')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: true });
      setColFour({ ...colFour, active: false });
      setColFive({ ...colFive, active: false });
    } else if (url.includes('opportunities/candidates')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: true });
      setColFive({ ...colFive, active: false });
    } else if (url.includes('interviews/index')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
      setColFive({ ...colFive, active: true });
    } else {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: true });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
      setColFive({ ...colFive, active: false });
    }
  };
  const [colFive, setColFive] = useState({
    path: `${url}/interviews/index`, text: 'Check your interviews', active: false, handleClick: handleActiveCol,
  });
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

  if (firstTime) {
    handleActiveCol(location.pathname);
    setFirstTime(false);
  }
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  let propToggle;
  if (isTablet && navToggle) {
    propToggle = true;
  } else {
    propToggle = false;
  }

  return (
    <div>
      <StyledCompanyUserPage>
        <SideNav
          colOne={colOne}
          colTwo={colTwo}
          colThree={colThree}
          colFour={colFour}
          colFive={colFive}
          toggler={propToggle}
          handleToggler={handleNavToggle}

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
          <Route path={`${path}/interviews/index`}>
            <CompanyInterviewIndex />
          </Route>

          <Route exact path={`${path}/opportunities/candidates/:jobId/:candidateId`}>
            <Candidates />
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
