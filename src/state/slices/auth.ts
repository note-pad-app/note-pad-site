import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookie } from '../../helpers/getCookieValue';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: getCookie('token', false),
  isAuthenticated: !!getCookie('token', false),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      document.cookie = 'token='+(state.token = action.payload)+";path=/";
      state.isAuthenticated = !!action.payload;
    },
    clearAuthToken: (state) => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
      state.token = null
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;