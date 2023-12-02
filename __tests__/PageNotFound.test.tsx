import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import PageNotFound from '../src/components/PageNotFound';

describe('Page not found', () => {
  it('renders the component', () => {
    render(<PageNotFound />);

    const pageNotFoundElement = screen.getByText(/this is not the page you are looking for/i);
    expect(pageNotFoundElement).toBeInTheDocument();
  });

  it('renders page not found on bad page', () => {
    const badRoute = '/some/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/this is not the page you are looking for/i)).toBeInTheDocument();
  });
});
