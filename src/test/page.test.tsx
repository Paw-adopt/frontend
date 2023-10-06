import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('should render the NavBar component', () => {
    render(<HomePage />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  it('should render the Footer component', () => {
    render(<HomePage />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the page title', () => {
    render(<HomePage />);
    const title = screen.getByText(/¡Adopta hoy y encuentra a tu mejor amigo peludo!/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the "Adopta" button', () => {
    render(<HomePage />);
    const adoptButton = screen.getByTestId('adopt-button');
    expect(adoptButton).toBeInTheDocument();
  });
});