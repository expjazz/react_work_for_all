import React, { useState } from 'react';
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
import UserInfo from '../../components/user/UserInfo';

const StyledUserPage = styled.div.attrs({
  className: 'grid',
})``;
const UserPage = () => {
  const { curriculum } = useSelector(state => state.users);

  const { path } = useRouteMatch();

  const currentUser = useSelector(state => state.users.currentUser);
  const [currentFocus, setCurrentFocus] = useState({ first: true, second: false });
  const handleFocus = val => {
    if (val.target.innerText === 'Look for Jobs') {
      setCurrentFocus({ first: false, second: true });
    } else {
      setCurrentFocus({ first: true, second: false });
    }
  };

  return (
    <div>
      <StyledUserPage>
        <SideNav focus={currentFocus} handleFocus={handleFocus}>
          haha
        </SideNav>

        <Switch>
          <Route exact path={`${path}/`}>
            { curriculum.personal ? <UserInfo currentUser={currentUser} /> : <p>no curriculum</p> }

          </Route>
          <Route path={`${path}/edit`}>
            <Curriculum />
          </Route>
          <Route path={`${path}/:topicId`}>
            <h2>haha</h2>
          </Route>
        </Switch>
      </StyledUserPage>
    </div>
  );
};

export default UserPage;
