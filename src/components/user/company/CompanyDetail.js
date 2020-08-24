/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const StyledCompanyDetail = styled.div.attrs({
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
      content: "";
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
const CompanyDetail = ({ currentUser, companyInfo }) => {
  const { addressArr, compPersonalArr } = useSelector(
    state => state.users.infoArrays,
  );
  return (
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
      <div className="jobOffer h-40">some offer</div>
      <div className="bottom">
        <div className="middlebutton">
          <img src={companyInfo.image} alt="" />
          <p>Your Profile</p>
        </div>
        <div className="infoList">
          <p>personal info</p>
          {compPersonalArr.map(info => (
            <p key={info}>
              {info}
              {' '}
              {companyInfo.personal[info]}
            </p>
          ))}
        </div>
        <div className="addressList">
          <p>address</p>
          {addressArr.map(info => (
            <p key={info}>
              {info}
              {' '}
              :
              {' '}
              {companyInfo.address[info]}
              {' '}
            </p>
          ))}
        </div>
      </div>
      {' '}
    </StyledCompanyDetail>
  );
};

export default CompanyDetail;

CompanyDetail.propTypes = {
  currentUser: PropTypes.object.isRequired,
  companyInfo: PropTypes.object.isRequired,
};
