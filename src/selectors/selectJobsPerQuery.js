import { createSelector } from 'reselect';

const selectJobsPerQuery = query => createSelector(
  state => state.jobOffers.index.all,
  all => all.map(job => {
    if (job.position.toLowerCase().includes(query.toLowerCase())) {
      return {
        requirement: job.requirement,
        salary: job.salary,
        position: job.position,
        companyName: job.user.profile.name,
        companyImage: job.user.profile.image_url,
      };
    }
  }),
);

export default { selectJobsPerQuery };
