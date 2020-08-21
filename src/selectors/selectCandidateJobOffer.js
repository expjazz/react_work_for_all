import { createSelector } from 'reselect';

const selectJobOfferCandidate = (jobOfferId, candidateId) => createSelector(
  state => state.company.jobOffer,
  jobOffer => {
    const job = jobOffer[jobOfferId];
    const candidate = job.candidates[candidateId];
    return {
      name: candidate.name,
      email: candidate.user.email,
      aboutMe: candidate.user.email.curriculum,
      address: candidate.user.email.curriculum.candidate_address,
      personal: candidate.user.email.curriculum.candidate_personal,
    };
  },
);

export default { selectJobOfferCandidate };
