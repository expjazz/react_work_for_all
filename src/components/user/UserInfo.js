import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import CandidateJobStats from './CandidateJobStats';

const StyledUserInfo = styled.div.attrs({
  className: 'content md:col-start-3 md:col-end-9 col-start-1 col-end-12 mx-8 md:mx-0 pt-10 flex justify-center flex-col text-center bg-gray-200 rounded-lg border shadow-2xl mb-8 mt-8',
})`
  .jobOffer {
    ${tw`pt-8 text-center`}
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
    button {
      ${tw`outline-none `}
    }
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
        background: transparent;
        border: 1px solid ${props => props.theme.green};
      }
    }
  }

  .candidateInfo {
    span {
      ${tw`text-gray-700 capitalize`}
    }

    h6 {
      ${tw`my-4 uppercase`}
    }
  }
`;
const UserInfo = () => {
  const { personalArr, addressArr } = useSelector(state => state.users.infoArrays);
  const { currentUser, curriculum } = useSelector(state => state.users);
  const allJobOffers = useSelector(state => state.jobOffers.index.all);
  let jobOffer = allJobOffers[Math.floor(Math.random() * allJobOffers.length)];
  if (!jobOffer) {
    jobOffer = {
      salary: 'loading',
      position: 'loading',
      user: {
        profile: {
          name: 'loading',
        },
      },
    };
  }

  return (
    <>
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
          <div className="buttons flex justify-center">

            <div className="middlebutton">
              <button type="button">
                Your Profile
              </button>
            </div>

            <div className="middlebutton">
              <button type="button">
                Check out your jobs applied
              </button>
            </div>
          </div>
          <div className="candidateInfo">

            {
          curriculum ? (
            <>
              <div className="infoList">
                <h6>Personal Information</h6>
                { personalArr.map((info => (
                  <p key={info}>
                    <span>

                      {info}
                      :
                    </span>
                    {' '}
                    {curriculum.personal[info]}
                  </p>
                ))) }
              </div>
              <div className="addressList">
                <h6>Address Information</h6>

                { addressArr.map(info => (
                  <p key={info}>
                    <span>

                      {info}

                      {' '}
                      :
                    </span>
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

        </div>
      </StyledUserInfo>

      <CandidateJobStats />
    </>
  );
};

export default UserInfo;
