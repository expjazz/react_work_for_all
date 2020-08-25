import { createSelector } from 'reselect';

const selectCandidateInterviews = createSelector(
  state => state.users.interviews,
  interviews => {
    if (!interviews[0]) return [];

    return interviews.map(interview => ({
      id: interview.id,
      status: interview.status,
      companyId: interview.company.id,
      companyName: interview.company.name,
      candidateId: interview.candidate.id,
      candidateName: interview.candidate.name,
      jobOfferId: interview.job_offer.id,
      jobOfferPosition: interview.job_offer.position,
      candidateImage: interview.candidate.image_url,
      time: interview.time,
    }));
  },
);

const selectCandidateInterviewsForUserPage = createSelector(
  state => state.users.interviews,
  interviews => {
    if (!interviews[1]) return [];

    return interviews.map(interview => ({
      id: interview.id,
      status: interview.status,
      companyId: interview.company.id,
      companyName: interview.company.name,
      candidateId: interview.candidate.id,
      candidateName: interview.candidate.name,
      jobOfferId: interview.job_offer.id,
      jobOfferPosition: interview.job_offer.position,
      candidateImage: interview.company.image_url,
      time: interview.time,
    }));
  },
);

export default { selectCandidateInterviews, selectCandidateInterviewsForUserPage };
