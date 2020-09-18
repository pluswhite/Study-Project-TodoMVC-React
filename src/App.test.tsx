import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todos/);

  expect(linkElement).toBeInTheDocument();
});
