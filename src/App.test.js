import React from 'react';
import { render } from '@testing-library/react';
import AppPrev from './AppPrev';

test('renders learn react link', () => {
  const { getByText } = render(<AppPrev />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
