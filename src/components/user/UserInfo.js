import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledUserInfo = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',
})`
  .title {
    h3 {
      ${tw`text-4xl`}
    }
  }

  .middlebutton {
    background: ${props => props.theme.green};
    ${tw` rounded-full w-48 h-16 text-center flex items-center relative`}
    :after {
      content: '';
      bottom: -12px;
      left: 50%;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 12px solid ${props => props.theme.green};
      position: absolute;
    }

    p {
      ${tw`m-auto`}
    }
  }
`;
const UserInfo = props => {
  const { currentUser } = props;
  const { personalArr, addressArr } = useSelector(state => state.users.infoArrays);
  const { curriculum } = currentUser;
  console.log(curriculum);
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
        <div className="middlebutton">
          <p>
            Your Profile
          </p>
        </div>
        <div className="infoList">
          <p>personal info</p>
          { currentUser ? personalArr.map((info => (
            <p key={info}>
              {info}
              {' '}
              {curriculum.personal[info]}
            </p>
          ))) : 'loading' }
        </div>
        <div className="addressList">
          <p>
            address
          </p>
          { currentUser ? addressArr.map(info => (
            <p key={info}>
              {info}
              {' '}
              :
              {' '}
              {curriculum.address[info]}
              {' '}
            </p>
          )) : 'loading'}
        </div>
      </div>
    </StyledUserInfo>
  );
};

export default UserInfo;
