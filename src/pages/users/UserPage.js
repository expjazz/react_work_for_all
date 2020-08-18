import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Curriculum from './Curriculum';

const StyledUserPage = styled.div.attrs({})``;
const UserPage = () => {
  const { path, url } = useRouteMatch();
  console.log(path);

  const currentUser = useSelector(state => state.users.currentUser);
  const match = useRouteMatch();
  console.log(`${path}/:components`);

  return (
    <div>
      <StyledUserPage>
        {currentUser.email}
        <Link to={`${url}/rendering`}>
          Curriculumasd
        </Link>
      </StyledUserPage>

      <Switch>

        <Route path={`${path}/:topicId`}>
          <Curriculum />
        </Route>
      </Switch>
    </div>
  );
};

export default UserPage;
