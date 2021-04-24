import { createSelector } from "reselect";

export const selectAgencies = state => state.agencies;

export const selectAgenciesData = createSelector([selectAgencies], agencies =>
  agencies ? agencies.data : []
);

export const selectAgenciesLoaded = createSelector([selectAgencies], agencies =>
  agencies ? agencies.loaded : false
);

export const selectAgenciesIsLoading = createSelector(
  [selectAgencies],
  agencies => (agencies ? agencies.isLoading : false)
);
