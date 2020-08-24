import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';

const StyledCandidateJobStats = styled.div.attrs({
  className: ' col-start-10 col-end-12 pt-48 hidden lg:block text-center px-4',

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

span {
  ${tw`text-gray-600 capitalize`}
}

`;
const CandidateJobStats = () => {
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
  const { jobsApplied } = useSelector(state => state.users.currentUser.user);
  const { interviews } = useSelector(state => state.users);
  return (
    <StyledCandidateJobStats>
      <p className="text-gray-400 uppercase mb-8">
        Check your statistics
      </p>
      <div className="content">
        <p>

          <span>
            Number of Jobs Applied:
          </span>
          {jobsApplied ? jobsApplied.length : 0}
        </p>
        <p>
          <span>
            Number of interviews scheduled:
          </span>
          {interviews.length - 1}
        </p>
        <p>
          <span>
            Messages Received:
          </span>
          0
        </p>
      </div>
      <div className="jobOffer">
        <p className="smallTitle">JOB OFFER</p>
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

    </StyledCandidateJobStats>
  );
};

export default CandidateJobStats;
