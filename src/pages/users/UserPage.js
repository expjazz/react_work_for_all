import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledUserPage = styled.div.attrs({})``;
const UserPage = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  return (
    <StyledUserPage>
      {currentUser.email}
    </StyledUserPage>
  );
};

export default UserPage;
