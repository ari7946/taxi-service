export const AuthActionTypes = {
  FETCH_USER: 'FETCH_USER',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  ERROR: 'AUTH_ERROR',
  LOGOUT: 'AUTH_LOGOUT'
}

export type AuthType = 'login' | 'register'

export interface userAuth {
  authType: AuthType,
  username: string,
  password: string,
  name?: string,
  email?: string,
  phone?: string,
}

export interface FetchUser {
  type: typeof AuthActionTypes.FETCH_USER,
}

export interface FetchSuccess {
  type: typeof AuthActionTypes.FETCH_SUCCESS,
  payload: {
    token: string
    currentUser: string
  }
}

export interface Error {
  type: typeof AuthActionTypes.ERROR,
  payload: {
    errorMessage: string
  }
}

export interface Logout {
  type: typeof AuthActionTypes.LOGOUT
}

export type AuthActions = FetchUser
  | FetchSuccess
  | Error
  | Logout