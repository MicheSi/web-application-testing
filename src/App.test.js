import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('display is rendering balls and strikes', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/balldisplay/i);
  getByTestId(/strikedisplay/i)
})

test('buttons are rendering', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/ballbtn/i);
  getByTestId(/strikebtn/i);
  getByTestId(/foulbtn/i);
  getByTestId(/hitbtn/i);
})
