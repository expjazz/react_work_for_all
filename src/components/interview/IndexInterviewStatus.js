import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useDispatch, useSelector } from 'react-redux';
import StyledGreenButton from '../common/GreenButton';
import PopUpInterview from './PopUpInterview';
import userActions from '../../actions/users';

const StyledContainer = styled.div.attrs({
  className: '',
})`
position: relative;

.text {
  position: absolute;
  ${tw`h-full w-full opacity-0 hover:opacity-100 bg-gray-600 text-white`}
  :hover {
    background: #000000a3;
  }
}
`;

const IndexInterviewStatus = ({
  image, classes, notimage, infoOnHover,
}) => {
  const dispatch = useDispatch();
  const profileType = useSelector(state => state.users.currentUser.user.generalInfo.profile_type);
  const { updateInterviewStatus } = userActions;
  const [showPopup, setShowPopup] = useState(false);
  const [infoDispatch, setInfoDispatch] = useState(false);
  const [dNone, setdNone] = useState(true);
  const allInterviews = useSelector(state => state.users.interviews);

  const matchAccepted = allInterviews.find(interview => (
    interview.status === 'Accepted' && infoOnHover.companyId === interview.company_id && infoOnHover.jobOfferId === interview.job_offer_id && infoOnHover
      .candidateId === interview.candidate_id
  ));

  const matchWaitingCompany = allInterviews.find(interview => (
    interview.status === 'waiting for confirmation from the company' && infoOnHover.companyId === interview.company_id && infoOnHover.jobOfferId === interview.job_offer_id && infoOnHover
      .candidateId === interview.candidate_id
  ));

  const matchNewCompanyHours = allInterviews.find(interview => (
    interview.status === 'Company needs another time. Accept?' && infoOnHover.companyId === interview.company_id && infoOnHover.jobOfferId === interview.job_offer_id && infoOnHover
      .candidateId === interview.candidate_id
  ));
  const handleShowPopup = info => {
    setInfoDispatch({
      ...info,
    });
    setdNone(false);
    setTimeout(() => setShowPopup(true), 300);
  };

  const hidePopUp = () => {
    setShowPopup(false);

    setTimeout(() => setdNone(true), 300);
  };

  const handleButtonLogic = () => {
    if (profileType === 'Company') {
      if (matchAccepted) {
        return <StyledGreenButton type="button">Accepted</StyledGreenButton>;
      } if (matchWaitingCompany) {
        return (
          <>
            {' '}
            <StyledGreenButton
              type="button"
              onClick={() => handleShowPopup({
                company_id: infoOnHover.companyId,
                candidate_id: infoOnHover.candidateId,
                job_offer_id: infoOnHover.jobOfferId,
                status: 'Company needs another time. Accept?',
              })}
            >
              Sugest another time
            </StyledGreenButton>

            <StyledGreenButton
              type="button"
              onClick={() => dispatch(updateInterviewStatus({
                company_id: infoOnHover.companyId,
                candidate_id: infoOnHover.candidateId,
                job_offer_id: infoOnHover.jobOfferId,
                status: 'Accepted',
              }))}
            >
              Accept
            </StyledGreenButton>
          </>
        );
      } if (matchNewCompanyHours) {
        return (
          <StyledGreenButton
            type="button"
          >
            Waiting for the candidate
          </StyledGreenButton>
        );
      }
    } else {
      if (matchAccepted) {
        return <StyledGreenButton type="button">Accepted</StyledGreenButton>;
      } if (matchNewCompanyHours) {
        return (
          <>
            {' '}
            <StyledGreenButton
              type="button"
              onClick={() => handleShowPopup({
                company_id: infoOnHover.companyId,
                candidate_id: infoOnHover.candidateId,
                job_offer_id: infoOnHover.jobOfferId,
                status: 'waiting for confirmation from the company',
              })}
            >
              Sugest another time to company
            </StyledGreenButton>

            <StyledGreenButton
              type="button"
              onClick={() => dispatch(updateInterviewStatus({
                company_id: infoOnHover.companyId,
                candidate_id: infoOnHover.candidateId,
                job_offer_id: infoOnHover.jobOfferId,
                status: 'Accepted',
              }))}
            >
              Accept
            </StyledGreenButton>
          </>
        );
      } if (matchWaitingCompany) {
        return (
          <StyledGreenButton
            type="button"

          >
            Waiting for the company
          </StyledGreenButton>
        );
      }
    }
    return '';
  };

  return (notimage ? (
    <StyledContainer>
      <div className="text transition-all duration-700 flex flex-col justify-between">
        <div className="content">

          {Object.keys(infoOnHover).map(val => (
            <p key={val}>
              {' '}
              {val}
              :
              {' '}
              {infoOnHover[val]}
              {' '}
            </p>
          ))}
        </div>
        {handleButtonLogic()}
      </div>
      <img src={image} alt="" className={`${classes.img} `} />
      <PopUpInterview
        show={showPopup}
        dNone={dNone}
        hide={hidePopUp}
        infoToDispatch={infoDispatch}
      />

    </StyledContainer>
  )
    : (
      <div className={`${classes.cont}`} style={{ backgroundColor: image }}>
        <div className={classes.img} style={{ background: `${image}` }} />
      </div>
    ));
};

export default IndexInterviewStatus;

IndexInterviewStatus.propTypes = {
  image: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(String).isRequired,
  notimage: PropTypes.bool.isRequired,
  infoOnHover: PropTypes.oneOfType([
    PropTypes.objectOf(String), PropTypes.bool,
  ]).isRequired,
};
