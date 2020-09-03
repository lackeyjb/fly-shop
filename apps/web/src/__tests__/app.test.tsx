import React from 'react';
import { render, screen } from 'test/utils';
import App from 'app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Flyco/i);
  expect(linkElement).toBeInTheDocument();
});
