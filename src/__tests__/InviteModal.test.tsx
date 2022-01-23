import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/InviteModal';

test('success submit', async () => {
  render(<Modal visible={true} onCancel={() => {}} />);

  const inputName = screen.getByPlaceholderText('Full name');
  userEvent.type(inputName, 'test');
  const inputEmail = screen.getByPlaceholderText('Email');
  userEvent.type(inputEmail, 'albert@airwallex.com');
  const inputConfirmEmail = screen.getByPlaceholderText('Confirm email');
  userEvent.type(inputConfirmEmail, 'albert@airwallex.com');

  fireEvent.click(screen.getByText(/send/i));

  const success = await screen.findByText('All Done!');
  expect(success).toBeInTheDocument();
});
