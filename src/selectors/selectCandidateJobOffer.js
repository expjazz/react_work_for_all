import { createSelector } from 'reselect';

const selectJobOfferCandidate = (jobOfferId, candidateId) => createSelector(
  state => state.users.company.jobOffers,
  jobOffers => {
    const job = jobOffers[jobOfferId];

    const candidate = job.candidates[candidateId];
    return {
      name: candidate.name,
      email: candidate.user.email,
      aboutMe: candidate.user.curriculum.about_me,
      address: candidate.user.curriculum.candidate_address,
      personal: candidate.user.curriculum.candidate_personal,
    };
  },
);

export default { selectJobOfferCandidate };
