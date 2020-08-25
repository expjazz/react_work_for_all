import { createSelector } from 'reselect';

const selectJobOfferCandidate = (jobOfferId, candidateId) => createSelector(
  state => state.users.company.jobOffers,
  jobOffers => {
    const job = jobOffers[jobOfferId];

    const candidate = job.candidates[candidateId];

    return {
      job,
      name: candidate.name,
      email: candidate.user.email,
      image: candidate.image_url,
      id: candidate.id,
      aboutMe: candidate.user.curriculum.about_me,
      address: candidate.user.curriculum.candidate_address,
      personal: candidate.user.curriculum.candidate_personal,
      jobId: job.id,
    };
  },
);

const selectJobDetailsToCandidate = jobId => createSelector(
  state => state.jobOffers.index.all, state => state.users.currentUser.user.name,
  (all, name) => {
    if ((all).length === 0) return {};
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
      position: job.position,
      companyName: job.user.profile.name,
      profileId: job.user.profile.id,
      companyImage: job.user.profile.image_url,
      jobId: job.id,

    };
  },
);

export default { selectJobOfferCandidate, selectJobDetailsToCandidate };
