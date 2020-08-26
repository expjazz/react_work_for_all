/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import {
  Switch,
  Route,
  useRouteMatch, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Curriculum from './Curriculum';
import SideNav from '../../components/user/SideNav';
import UserInfo from '../../components/user/UserInfo';
import JobShow from '../../components/user/JobShow';
import UserInterviewIndex from '../../components/user/UserInterviewIndex';
import JobCarousel from '../../components/common/JobCarousel';
import selectJobs from '../../selectors/selectJobs';

const StyledUserPage = styled.div.attrs({
  className: 'sm:grid flex flex-col',
})``;
const UserPage = ({ users: { currentUser } }) => {
  const location = useLocation();
  const { selectAllJobs } = selectJobs;
  const allJobs = useSelector(selectAllJobs);

  const isTablet = useMediaQuery({ query: '(max-width: 768px' });
  const [firstTime, setFirstTime] = useState(true);
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
    } else if (url.includes('interviews/index')) {
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
  const button = true;

  return (
    <div>
      <StyledUserPage>
        <SideNav
          colOne={colOne}
          colTwo={colTwo}
          colThree={colThree}
          colFour={colFour}
          handleClick={handleActiveCol}
          toggler={propToggle}
          handleToggler={handleNavToggle}
        />

        <Switch>
          <Route exact path={`${path}/`}>
            <UserInfo toggler={propToggle} />

          </Route>
          <Route path={`${path}/curriculum/edit`}>
            <Curriculum toggler={propToggle} />
          </Route>
          <Route path={`${path}/interviews/index`}>
            <UserInterviewIndex />
          </Route>
          <Route path={`${path}/jobs/index/:jobId`}>
            <JobShow />
          </Route>
          <Route exact path={`${path}/jobs/index`}>
            <JobCarousel allJobs={allJobs} button={button} infoCandidates={false} contentIfNone="There are no jobs available at the moment" />
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
