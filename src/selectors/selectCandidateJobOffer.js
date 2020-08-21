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

const selectJobDetailsToCandidate = jobId => createSelector(
  state => state.jobOffers.index.all, state => state.currentUser.user.name,
  (all, name) => {
    const job = all[jobId];
    let status = 'idle';
    if (job.approved.find(candidate => candidate.name === name)) {
      status = 'approved';
    } else if (status !== 'approved' && job.candidates.find(candidate => candidate.name === name)) {
      status = 'pending';
    }
    return {
      requirement: job.requirement,
      salary: job.salary,
      status,
      companyName: job.user.profile.name,

    };
  },
);

export default { selectJobOfferCandidate };
