import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/components/navBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should render the logo', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    const links = screen.getAllByTestId(/nav-link-.*/);
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent(/Publica con nosotros/i);
    expect(links[1]).toHaveTextContent(/Contacto/i);
    expect(links[2]).toHaveTextContent(/Adopciones/i);
  });

  it('should render the correct navigation link names', () => {
    const navLinks = screen.getAllByTestId(/nav-link-.*/);
    expect(navLinks[0]).toHaveTextContent(/Publica con nosotros/i);
    expect(navLinks[1]).toHaveTextContent(/Contacto/i);
    expect(navLinks[2]).toHaveTextContent(/Adopciones/i);
  });

  it('should have the correct href values for the navigation links', () => {
    const navLinks = screen.getAllByTestId(/nav-link-.*/);
    expect(navLinks[0]).toHaveAttribute('href', '/publica-con-nosotros');
    expect(navLinks[1]).toHaveAttribute('href', '/contacto');
    expect(navLinks[2]).toHaveAttribute('href', '/adopciones');
  });

  it('should render the registration button', () => {
    const registrationButton = screen.getByRole('button', { name: /registrarse/i });
    expect(registrationButton).toBeInTheDocument();
  });

  it('should render the login button', () => {
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });
    expect(loginButton).toBeInTheDocument();
  });
});