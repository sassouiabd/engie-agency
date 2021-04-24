import { createSelector } from "reselect";

export const selectUser = state => state.user;

export const selectChoice = createSelector([selectUser], user =>
  user ? user.choice : null
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
export const selectToken = createSelector([selectUser], user =>
  user ? user.token : null
);

export const selectUserId = createSelector([selectUser], user =>
  user ? user.id : null
);
