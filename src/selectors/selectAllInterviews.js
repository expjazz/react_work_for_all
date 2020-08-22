import { createSelector } from 'reselect';

const selectCandidateInterviews = createSelector(
  state => state.users.interviews,
  interviews => interviews.map(interview => ({
    id: interview.id,
    status: interview.status,
    companyId: interview.company.id,
    companyName: interview.company.name,
    candidateId: interview.candidate.id,
    candidateName: interview.candidate.name,
    jobOfferId: interview.job_offer.id,
    jobOfferPosition: interview.job_offer.position,
    time: interview.time,
  })),
);

export default { selectCandidateInterviews };
