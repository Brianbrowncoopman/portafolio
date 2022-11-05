import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';



test('render the landing page', () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Bienvenido" }));
});



