import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledUserInfo = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',
})`
  .title {
    h3 {
      ${tw`text-4xl`}
    }
  }
`;
const UserInfo = props => {
  const { currentUser } = props;
  return (
    <StyledUserInfo>
      <div className="title">
        <h3>Overview</h3>
        <p>
          Hi
          {' '}
          {currentUser ? currentUser.user.name : 'loading'}
          , welcome back!
        </p>
      </div>
      <div className="jobOffer h-40">
        some offer
      </div>
      <div className="bottom">
        bottom
      </div>
    </StyledUserInfo>
  );
};

export default UserInfo;
