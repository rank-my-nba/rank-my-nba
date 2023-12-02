import * as React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Login from '../src/components/Login';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('renders an h1', () => {
    const h1Element = screen.getByText('2022-23 NBA Stats');
    expect(h1Element).toBeInTheDocument();
  });

  it('should render Enter your email below to create your account', () => {
    const div = screen.getByText('Enter your email below to create your account');
    expect(div).toBeInTheDocument();
  });

  afterAll(cleanup);
});
