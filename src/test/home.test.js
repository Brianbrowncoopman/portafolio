import { render, screen } from '@testing-library/react';
import home from '../components/home/Index';


test('home se encuentra en el documento', () => {
  expect(home).toBeInTheDocument();
});