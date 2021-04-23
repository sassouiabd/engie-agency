import { createSelector } from "reselect";

export const selectUser = state => state.user;

export const selectChoice = createSelector([selectUser], user =>
  user ? user.choice : -1
);

export const selectIsSignIn = createSelector([selectUser], user =>
  user ? user.isSignIn : false
);
export const selectEmail = createSelector([selectUser], user =>
  user ? user.email : null
);
export const selectPassword = createSelector([selectUser], user =>
  user ? user.password : null
);
