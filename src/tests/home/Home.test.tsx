import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages/home/Home';

test('renders header text', () => {
  const { getByText } = render(<Home />);
  const headerElement = getByText(/Vandelay Industries/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders warehouses text', () => {
  const { getByText } = render(<Home />);
  const warehousesElement = getByText(/Warehouses/i);
  expect(warehousesElement).toBeInTheDocument();
});

test('renders factories text', () => {
  const { getByText } = render(<Home />);
  const factoriesElement = getByText(/Factories/i);
  expect(factoriesElement).toBeInTheDocument();
});
