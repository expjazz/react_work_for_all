import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import CompanyDetail from './CompanyDetail';
import SideNav from '../../../components/user/SideNav';

const StyledCompanyUserPage = styled.div.attrs({
  className: 'grid',

})``;
const CompanyUserPage = ({ users: { currentUser, company } }) => {
  const { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div>
      <StyledCompanyUserPage>
        <SideNav colOne={{ path: url, text: currentUser.user.name, active: true }} />
        <Switch>
          <Route exact path={`${path}/`}>
            <CompanyDetail />
          </Route>
          {/* <Route path={`${path}/edit`}>
          <Curriculum />
          </Route>
          <Route path={`${path}/postjobs`}>
          <h2>haha</h2>
        </Route> */}
        </Switch>
      </StyledCompanyUserPage>
    </div>
  );
};

export default CompanyUserPage;
