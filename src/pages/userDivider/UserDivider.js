import React from 'react';
import { useSelector } from 'react-redux';

const UserDivider = () => {
  const users = useSelector(state => state.users);
  if (users.status === 'loading' || users.status === 'idle') {
    return <p>loading</p>;
  } if (users.status === 'rejected') {
    return <p>{users.currentUser.message}</p>;
  }
  return (
    <p>fulfilled</p>
  );
};

export default UserDivider;
