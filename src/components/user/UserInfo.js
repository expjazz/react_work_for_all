import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledUserInfo = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',
})`
  .jobOffer {
    ${tw`pt-8 pl-8`}
    .smallTitle {
      ${tw`text-gray-400`}
    }

    .title {
      ${tw`text-4xl`}
    }

    span {
      ${tw`text-gray-600 capitalize`}
    }
  }

  .title {
    h3 {
      ${tw`text-4xl`}
    }
  }

  .bottom {
    ${tw`pt-16`}
  }

  .buttons {
    ${tw`mb-8`}
    .middlebutton {
      background: ${props => props.theme.green};
      ${tw` rounded-full w-48 h-16 text-center flex items-center relative justify-center`}
      p {
        ${tw`m-auto`}
      }

      :first-child {
        ::after {
          content: '';
          bottom: -12px;
          left: 50%;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid ${props => props.theme.green};
          position: absolute;
        }
      }

      :last-child {
        ${tw`ml-8`}

        background: ${props => props.theme.white};
        border: 1px solid ${props => props.theme.green};
      }
    }
  }
`;
const UserInfo = () => {
  const { personalArr, addressArr } = useSelector(state => state.users.infoArrays);
  const { currentUser, curriculum } = useSelector(state => state.users);
  const allJobOffers = useSelector(state => state.jobOffers.index.all);
  const jobOffer = allJobOffers[Math.floor(Math.random() * allJobOffers.length)];

  if (!jobOffer) return <p>loading</p>;
  return (
    <StyledUserInfo>
      <div className="title">
        <h3>Overview</h3>
        <p>
          Hi
          {' '}
          {' '}
          {currentUser.user.name}
          , welcome back!
        </p>
      </div>
      <div className="jobOffer h-40">
        <p className="smallTitle">CHECK OUT THIS JOB OFFER</p>
        <p className="title">
          $
          {' '}
          {jobOffer.salary}
        </p>
        <div className="content">
          <p>
            <span>

              position:
            </span>
            {' '}
            {jobOffer.position}
          </p>
          <p>
            <span>

              company:
            </span>
            {' '}
            {jobOffer.user.profile.name}
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="buttons flex">

          <div className="middlebutton">
            <button type="button">
              Your Profile
            </button>
          </div>

          <div className="middlebutton">
            <button type="button">
              Check out more offers
            </button>
          </div>
        </div>
        {
          curriculum ? (
            <>
              <div className="infoList">
                <p>personal info</p>
                { personalArr.map((info => (
                  <p key={info}>
                    {info}
                    {' '}
                    {curriculum.personal[info]}
                  </p>
                ))) }
              </div>
              <div className="addressList">
                <p>
                  address
                </p>
                { addressArr.map(info => (
                  <p key={info}>
                    {info}
                    {' '}
                    :
                    {' '}
                    {curriculum.address[info]}
                    {' '}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <p>add  curricukum</p>)
        }
      </div>
    </StyledUserInfo>
  );
};

export default UserInfo;
