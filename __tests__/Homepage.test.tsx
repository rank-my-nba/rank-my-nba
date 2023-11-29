import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from 'src/components/Homepage';

it('renders 2022-23 NBA Stats h1', () => {
    render(<Homepage />);
    const h1Element = screen.getByText('2022-23 NBA Stats');
})