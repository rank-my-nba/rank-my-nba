import * as React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Homepage from '../src/components/Homepage';
import AuthenticationPage from '../src/components/Login';

describe('Home page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthenticationPage />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('renders an h1', () => {
    const h1Element = screen.getByText('2022-23 NBA Stats');
    expect(h1Element).toBeInTheDocument();
  });

  it('should navigate to the login page', async () => {
    userEvent.click(screen.getByRole('link', { name: 'Go to Login' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Create an account' })).toBeInTheDocument();
    });
  });

  afterAll(cleanup);
});
