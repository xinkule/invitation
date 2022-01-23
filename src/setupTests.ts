// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// https://github.com/ant-design/ant-design/issues/21096#issuecomment-725301551
global.matchMedia = () => ({
  matches: false,
  media: '',
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// set up mock server
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
