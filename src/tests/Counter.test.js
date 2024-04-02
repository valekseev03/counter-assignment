import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  const counterMessage1 = screen.getByText(/0/i);
  expect(counterMessage1).toBeInTheDocument();

  await userEvent.click(screen.getByText('+'))

  const counterMessage2 = screen.getByText(/1/i);
  expect(counterMessage2).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  const counterMessage1 = screen.getByText(/0/i);
  expect(counterMessage1).toBeInTheDocument();

  await userEvent.click(screen.getByText('-'))
  
  const counterMessage2 = screen.getByText(/-1/i);
  expect(counterMessage2).toBeInTheDocument();
});
