/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Curriculum from './Curriculum';
import SideNav from '../../components/user/SideNav';
import UserInfo from '../../components/user/UserInfo';
import JobsIndex from '../jobs/JobsIndex';
import JobShow from '../../components/user/JobShow';
import UserInterviewIndex from '../../components/user/UserInterviewIndex';

const StyledUserPage = styled.div.attrs({
  className: 'grid',
})``;
const UserPage = ({ users: { currentUser } }) => {
  const { path, url } = useRouteMatch();
  const handleActiveCol = url => {
    if (url.includes('edit')) {
      setColTwo({ ...colTwo, active: true });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: false });
      setColFour({ ...colFour, active: false });
    } else if (url.includes('/jobs/index')) {
      setColTwo({ ...colTwo, active: false });
      setColOne({ ...colOne, active: false });
      setColThree({ ...colThree, active: true });
      setColFour({ ...colFour, active: false });
    } else if (true) {
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
    path: `${path}/curriculum/edit`, text: 'Edit your info', active: false, handleClick: handleActiveCol,
  });
  const [colThree, setColThree] = useState({
    path: `${path}/jobs/index`, text: 'Check out a job opportunity', active: false, handleClick: handleActiveCol,
  });

  const [colFour, setColFour] = useState({
    path: `${path}/interviews/index`, text: 'Check your interviews', active: false, handleClick: handleActiveCol,
  });

  return (
    <div>
      <StyledUserPage>
        <SideNav
          colOne={colOne}
          colTwo={colTwo}
          colThree={colThree}
          colFour={colFour}
          handleClick={handleActiveCol}
        />

        <Switch>
          <Route exact path={`${path}/`}>
            <UserInfo />

          </Route>
          <Route path={`${path}/curriculum/edit`}>
            <Curriculum />
          </Route>
          <Route path={`${path}/interviews/index`}>
            <UserInterviewIndex />
          </Route>
          <Route path={`${path}/jobs/index/:jobId`}>
            <JobShow />
          </Route>
          <Route exact path={`${path}/jobs/index`}>
            <JobsIndex />
          </Route>
        </Switch>
      </StyledUserPage>
    </div>
  );
};

export default UserPage;

UserPage.propTypes = {
  users: PropTypes.shape({
    currentUser: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
};
