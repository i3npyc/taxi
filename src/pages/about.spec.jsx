import React from 'react';
import { render } from '@testing-library/react';
import { About } from './index';

describe('About', () => {
  it('renders correctly', () => {
	  const {container} = render(<About />)
  });
});
