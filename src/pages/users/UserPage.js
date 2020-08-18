import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import Curriculum from './Curriculum';
import SideNav from '../../components/user/SideNav';

const StyledUserPage = styled.div.attrs({
  className: 'grid',
})``;
const UserPage = () => {
  const { path, url } = useRouteMatch();
  console.log(path);

  const currentUser = useSelector(state => state.users.currentUser);
  const match = useRouteMatch();
  console.log(`${path}/:components`);

  return (
    <div>
      <StyledUserPage>
        <SideNav>
          haha
        </SideNav>

        <Switch>
          <Route exact path={`${path}/`}>
            <div className="content col-start-4 col-end-12">

              {currentUser.email}
              <Link to={`${url}/rendering`}>
                Curriculumasd
              </Link>
            </div>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Curriculum />
          </Route>
        </Switch>
      </StyledUserPage>
    </div>
  );
};

export default UserPage;
