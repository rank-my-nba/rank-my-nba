import * as React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Homepage from '../src/components/Homepage';

describe('Home page', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  it('renders an h1', () => {
    const h1Element = screen.getByText('2022-23 NBA Stats');
    expect(h1Element).toBeInTheDocument();
  });

  it('should render hello world', () => {
    const div = screen.getByText('Hello world');
    expect(div).toBeInTheDocument();
  });

  afterAll(cleanup);
});
