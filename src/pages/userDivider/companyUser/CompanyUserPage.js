import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import CompanyDetail from '../../../components/user/company/CompanyDetail';
import SideNav from '../../../components/user/SideNav';
import CompanyEdit from './CompanyEdit';

const StyledCompanyUserPage = styled.div.attrs({
  className: 'grid',

})``;
const CompanyUserPage = ({ users: { currentUser, company } }) => {
  const { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div>
      <StyledCompanyUserPage>
        <SideNav
          colOne={{ path: url, text: currentUser.user.name, active: true }}
          colTwo={{ path: `${path}/edit`, text: 'Edit your info', active: false }}
        />
        <Switch>
          <Route exact path={`${path}/`}>
            <CompanyDetail currentUser={currentUser} companyInfo={company} />
          </Route>
          <Route path={`${path}/edit`}>
            <CompanyEdit />
          </Route>
          {/* <Route path={`${path}/postjobs`}>
            <h2>haha</h2>
          </Route> */}
        </Switch>
      </StyledCompanyUserPage>
    </div>
  );
};

export default CompanyUserPage;
