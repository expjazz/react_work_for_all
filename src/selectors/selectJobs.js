import { createSelector } from 'reselect';

const selectJobsFromCompany = createSelector(
  state => state.users,
  users => {
    if (!users.company.jobOffers) return [];
    return users.company.jobOffers.map(offer => (
      { ...offer, image: users.currentUser.user.image }
    ));
  },
);

const selectAllJobs = createSelector(
  state => state.jobOffers.index.all,
  all => {
    if (all.length === 0) return [];
    return (
      all.map(job => ({
        requirement: job.requirement,
        salary: job.salary,
        position: job.position,
        companyName: job.user.profile.name,
        companyImage: job.user.profile.image_url,

      }
      ))
    );
  },
);
export default { selectJobsFromCompany, selectAllJobs };

// state => state.users.company.jobOffers
