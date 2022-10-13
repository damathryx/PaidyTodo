import { AuthStore, login, logout } from './auth';

describe('Auth', () => {
  it('should display auth from auth store', () => {
    expect(AuthStore.getState()).toEqual({ isAuthenticated: false });
  });

  test('login should change isAuthenticated to true', () => {
    login();
    expect(AuthStore.getState()).toEqual({ isAuthenticated: true });
  });

  test('logout should change isAuthenticated to false', () => {
    logout();
    expect(AuthStore.getState()).toEqual({ isAuthenticated: false });
  });
});
