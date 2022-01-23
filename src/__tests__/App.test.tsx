import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders invite button', () => {
  render(<App />);
  const inviteBtn = screen.getByText(/request an invite/i);
  expect(inviteBtn).toBeInTheDocument();
});
