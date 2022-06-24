import { createSelector } from 'reselect';

export const selectAuthState = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (authState) => authState.currentUser
);

export const selectErrorMessage = createSelector(
  [selectAuthState],
  (authState) => authState.errorMessage
);

export const selectAuthLoading = createSelector(
  [selectAuthState],
  (authState) => authState.loading
);

export const selectToken = createSelector([selectAuthState], (authState) => authState.token);

export const selectAuthRole = createSelector([selectAuthState], (authState) => {
  if (!authState.currentUser) {
    return '';
  } else if (authState.currentUser === 'admin') {
    return 'admin';
  } else {
    return 'user';
  }
});

export const selectAuthHeaders = createSelector([selectAuthState], (authState) => {
  if (authState.token && authState.currentUser) {
    return {
      headers: {
        Authorization: authState.token,
      },
    };
  }
});
