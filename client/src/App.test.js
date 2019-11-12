import React from 'react';

import MainCard from './Components/MainCard';

import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  //Arrange, Act, Assert
  render(<App />);
});

test('it displays a link button with the text Switch theme', () => {
  //Arrange, Act, Assert
  const { getByText } = render(<App />);
  getByText('Switch theme');
});

test('get Navbar from App', () => {
  //Arrange, Act, Assert
  const { getByText } = render(<App />);
  getByText('Navbar');
});
