import { render, screen, fireEvent } from '@testing-library/react';
import Content from '../components/Content';

test('show invite modal', () => {
  render(<Content />);
  fireEvent.click(screen.getByRole('button'));
  const input = screen.getByPlaceholderText(/full name/i);
  expect(input).toBeInTheDocument();
});
