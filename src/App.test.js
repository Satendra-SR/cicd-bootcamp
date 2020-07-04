import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Check bootcamp lable', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CICD bootcamp 2022/i);
  expect(linkElement).toBeInTheDocument();
});
