import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/UserForm';

test('required input', async () => {
  render(<Form onSuccess={() => {}} />);
  fireEvent.click(screen.getByText(/send/i));
  const alert = await screen.findByText(/the input is required/i);
  expect(alert).toBeInTheDocument();
});

test('invalid full name', async () => {
  render(<Form onSuccess={() => {}} />);
  const input = screen.getByPlaceholderText(/full name/i);
  userEvent.type(input, 'aa');
  const alert = await screen.findByText(/at least 3 characters/i);
  expect(alert).toBeInTheDocument();
});

test('invalid email', async () => {
  render(<Form onSuccess={() => {}} />);
  const input = screen.getByPlaceholderText('Email');
  userEvent.type(input, 'aa');
  const alert = await screen.findByText(/not a valid e-mail/i);
  expect(alert).toBeInTheDocument();
});

test('different confirm email', async () => {
  render(<Form onSuccess={() => {}} />);

  const inputName = screen.getByPlaceholderText('Full name');
  userEvent.type(inputName, 'test');
  const inputEmail = screen.getByPlaceholderText('Email');
  userEvent.type(inputEmail, 'test@qq.com');
  const inputConfirmEmail = screen.getByPlaceholderText('Confirm email');
  userEvent.type(inputConfirmEmail, 'test@qq.co');

  fireEvent.click(screen.getByText(/send/i));

  const alert = await screen.findByText(
    'Confirm Email is not the same as Email!'
  );
  expect(alert).toBeInTheDocument();
});

test('existed user', async () => {
  render(<Form onSuccess={() => {}} />);

  const inputName = screen.getByPlaceholderText('Full name');
  userEvent.type(inputName, 'test');
  const inputEmail = screen.getByPlaceholderText('Email');
  userEvent.type(inputEmail, 'usedemail@airwallex.com');
  const inputConfirmEmail = screen.getByPlaceholderText('Confirm email');
  userEvent.type(inputConfirmEmail, 'usedemail@airwallex.com');

  fireEvent.click(screen.getByText(/send/i));

  const alert = await screen.findByText('Bad Request: Email is already in use');
  expect(alert).toBeInTheDocument();
});
