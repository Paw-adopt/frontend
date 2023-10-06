import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/components/navBar';

describe('NavBar', () => {
  it('should render the logo', () => {
    render(<NavBar />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    render(<NavBar />);
    const links = screen.getAllByTestId(/nav-link-.*/);
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent(/Publica con nosotros/i);
    expect(links[1]).toHaveTextContent(/Donaciones/i);
    expect(links[2]).toHaveTextContent(/Adopciones/i);
  });

  it('should render the correct navigation link names', () => {
    render(<NavBar />);
    const navLinks = screen.getAllByTestId(/nav-link-.*/);
    expect(navLinks[0]).toHaveTextContent(/Publica con nosotros/i);
    expect(navLinks[1]).toHaveTextContent(/Donaciones/i);
    expect(navLinks[2]).toHaveTextContent(/Adopciones/i);
  });

  it('should have the correct href values for the navigation links', () => {
    render(<NavBar />);
    const navLinks = screen.getAllByTestId(/nav-link-.*/);
    expect(navLinks[0]).toHaveAttribute('href', '#');
    expect(navLinks[1]).toHaveAttribute('href', '#');
    expect(navLinks[2]).toHaveAttribute('href', '#');
  });

  it('should render the registration button', () => {
    render(<NavBar />);
    const registrationButton = screen.getByRole('button', { name: /registrarse/i });
    expect(registrationButton).toBeInTheDocument();
  });

  it('should render the login button', () => {
    render(<NavBar />);
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });
    expect(loginButton).toBeInTheDocument();
  });
});