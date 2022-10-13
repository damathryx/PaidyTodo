import { createStore } from 'effector';
import { createEvent } from 'effector';

// events
export const login = createEvent('login');
export const logout = createEvent('logout');

const initialState = {
  isAuthenticated: false,
};

// store
export const AuthStore = createStore(initialState, { name: 'authStore' })
  .on(login, () => ({
    isAuthenticated: true,
  }))
  .on(logout, () => ({
    isAuthenticated: false,
  }));
