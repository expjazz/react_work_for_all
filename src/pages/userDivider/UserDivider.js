import React from 'react';
import { useSelector } from 'react-redux';
import CompanyUserPage from './companyUser/CompanyUserPage';

const UserDivider = () => {
  const users = useSelector(state => state.users);

  // handle loading state and no logged user

  if (users.status === 'loading' || users.status === 'idle') {
    return <p>loading</p>;
  } if (users.status === 'rejected') {
    return <p>{users.currentUser.message}</p>;
  }

  // handle logged user

  if (users.company) return <CompanyUserPage users={users} />;
  return <p>user for now </p>;
};

export default UserDivider;
