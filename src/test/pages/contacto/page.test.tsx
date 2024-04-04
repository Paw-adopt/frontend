import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from '@/app/contacto/page';

afterEach(cleanup);

describe('ContactPage', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('should render the form fields', () => {
    const firstNameInput = screen.getByRole('textbox', { name: /nombre/i });
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByRole('textbox', { name: /apellido/i });
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', { name: /correo/i });
    expect(emailInput).toBeInTheDocument();

    const messageInput = screen.getByRole('textbox', { name: /mensaje/i });
    expect(messageInput).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    const submitButton = screen.getByRole('button', { name: /hablemos/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('should enable the submit button when the switch is checked', () => {
    const switchButton = screen.getByRole('checkbox', { name: /agree to policies/i });
    fireEvent.click(switchButton);

    const submitButton = screen.getByRole('button', { name: /hablemos/i });
    expect(submitButton).not.toBeDisabled();
  });
});