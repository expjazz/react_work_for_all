/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyStats from '../../company/CompanyStats';

const StyledCompanyDetail = styled.div.attrs({
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

.companyInfo {
  span {
    ${tw`text-gray-700 capitalize`}
  }

  h6 {
    ${tw`my-4 uppercase`}
  }
}
`;
const CompanyDetail = ({ currentUser, companyInfo }) => {
  const { addressArr, compPersonalArr } = useSelector(
    state => state.users.infoArrays,
  );
  return (
    <>
      <StyledCompanyDetail>
        <div className="title">
          <h3>Overview</h3>
          <p>
            Hi
            {' '}
            {currentUser.user.name}
            , welcome back!
          </p>
        </div>
        <div className="image">
          <img src={currentUser.user.image} alt="" />
        </div>
        <div className="bottom">
          <div className="middlebutton">
            <h6>Your Profile</h6>
          </div>
          <div className="companyInfo">

            <div className="infoList">
              <h6>Personal Information</h6>
              {compPersonalArr.map(info => (
                <p key={info}>
                  <span>

                    {info}
                  </span>
                  {' '}
                  {companyInfo.personal[info]}
                </p>
              ))}
            </div>
            <div className="addressList">
              <h6>Address</h6>
              {addressArr.map(info => (
                <p key={info}>
                  <span>

                    {info}
                  </span>
                  {' '}
                  :
                  {' '}
                  {companyInfo.address[info]}
                  {' '}
                </p>
              ))}
            </div>
          </div>

        </div>
        {' '}
      </StyledCompanyDetail>
      <CompanyStats />
    </>
  );
};

export default CompanyDetail;

CompanyDetail.propTypes = {
  currentUser: PropTypes.object.isRequired,
  companyInfo: PropTypes.object.isRequired,
};
