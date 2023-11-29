import * as React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Homepage from '../src/components/Homepage';

describe('Home page', () => {
  it('renders an h1', () => {
    render(<Homepage />);
    const h1Element = screen.getByText('2022-23 NBA Stats');
    expect(h1Element).toBeInTheDocument();
  });

  afterAll(cleanup);
});
