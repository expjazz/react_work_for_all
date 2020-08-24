import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import CandidateJobStats from './CandidateJobStats';

const StyledUserInfo = styled.div.attrs({
  className: 'content md:col-start-3 md:col-end-9 col-start-1 col-end-12 mx-8 md:mx-0 pt-10 flex justify-center flex-col text-center bg-gray-200 rounded-lg border shadow-2xl mb-8 mt-8 w-11/12 transition-all duration-200 ease-linear',
})`
justify-self: center;
overflow-y: hidden;

:hover {
  transform: scaleY(1.01);
  transform: scale(1.01);
}

.title {
  h3 {
    ${tw`text-4xl`}
  }
}

span {
  ${tw`text-gray-600 capitalize`}
}

.image {
  ${tw`w-3/12 mx-auto mt-16`}
}

.bottom {
  ${tw`pt-12`}
}

.buttons {
  button {
    ${tw`outline-none `}
  }
  ${tw`mb-8`}
  .middlebutton {
    background: ${props => props.theme.green};
    ${tw` rounded-full w-48 h-16 text-center flex items-center relative justify-center mr-3`}
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
        <div className="image">
          <img src={currentUser.user.image} alt="" />
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
                <div className="aboutMe">
                  <h6>About Me</h6>
                  <p className="text-gray-700">
                    {' '}
                    {curriculum.header.about_me}
                    {' '}
                  </p>
                </div>
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

              <div className="pastJobs">
                <h6>Past Jobs</h6>
                {curriculum.pastJobs.map(job => (
                  <div key={job.id} className="border mb-8">
                    <p>
                      <span>Name: </span>
                      {' '}
                      {job.name }
                    </p>
                    <p>
                      <span>Start:</span>
                      {' '}
                      {job.start}
                      {' '}
                    </p>

                    <p>
                      <span>End:</span>
                      {' '}
                      {job.end}
                      {' '}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="px-12 text-center">To access the app and to apply for a job you need to create a curriculum. To do it, go to Edit your info tab on the sidebar </p>)
        }
          </div>

        </div>
      </StyledUserInfo>

      <CandidateJobStats />
    </>
  );
};

export default UserInfo;
