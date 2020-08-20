/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
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
const UserPage = ({ users: { currentUser, curriculum } }) => {
  const { path, url } = useRouteMatch();
  const handleActiveCol = url => {
    if (url.includes('edit')) {
      setColTwo({ ...colTwo, active: true });
      setColOne({ ...colOne, active: false });
      // setColThree({ ...colThree, active: false });
    } else if (url.includes('opportunities/new')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      // setColThree({ ...colThree, active: true });
    } else {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: true });
      // setColThree({ ...colThree, active: false });
    }
  };
  const [colOne, setColOne] = useState({
    path: url, text: currentUser.user.name, active: true, handleClick: handleActiveCol,
  });
  const [colTwo, setColTwo] = useState({
    path: `${path}/curriculum/edit`, text: 'Edit your info', active: false, handleClick: handleActiveCol,
  });
  // const [colThree, setColThree] = useState({
  //   path: `${path}/opportunities/new`, text: 'Create a new job opportunity', active: false, handleClick: handleActiveCol,
  // });

  return (
    <div>
      <StyledUserPage>
        <SideNav
          colOne={colOne}
          colTwo={colTwo}
          handleClick={handleActiveCol}
        />

        <Switch>
          <Route exact path={`${path}/`}>
            <UserInfo />

          </Route>
          <Route path={`${path}/curriculum/edit`}>
            <Curriculum />
          </Route>
          {/* <Route path={`${path}/:topicId`}>
            <h2>haha</h2>
          </Route> */}
        </Switch>
      </StyledUserPage>
    </div>
  );
};

export default UserPage;
