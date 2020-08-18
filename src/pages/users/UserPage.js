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

const StyledUserPage = styled.div.attrs({
  className: 'grid',
})``;
const UserPage = () => {
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
            <div className="content col-start-3 col-end-12">

              some content

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
