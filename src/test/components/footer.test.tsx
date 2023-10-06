import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer';

describe('Footer', () => {
  it('should render the copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByTestId('copyright');
    expect(copyright).toBeInTheDocument();
  });

  it('should render the Privacy Policy link', () => {
    render(<Footer />);
    const privacyPolicyLink = screen.getByTestId('privacy-policy');
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  it('should render the Contact link', () => {
    render(<Footer />);
    const contactLink = screen.getByTestId('contact');
    expect(contactLink).toBeInTheDocument();
  });

  it('should render the Github link', () => {
    render(<Footer />);
    const githubLink = screen.getByTestId('github');
    expect(githubLink).toBeInTheDocument();
  });
});