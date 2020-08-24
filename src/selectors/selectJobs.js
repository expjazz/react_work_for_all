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

export default { selectJobsFromCompany };

// state => state.users.company.jobOffers
