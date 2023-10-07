import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer';

describe('Footer', () => {
  beforeEach(() => { 
    render(<Footer />); 
  });
  it('should render the copyright text', () => {
    const copyright = screen.getByTestId('copyright');
    expect(copyright).toBeInTheDocument();
  });

  it('should render the Privacy Policy link', () => {
    const privacyPolicyLink = screen.getByTestId('privacy-policy');
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  it('should render the Contact link', () => {
    const contactLink = screen.getByTestId('contact');
    expect(contactLink).toBeInTheDocument();
  });

  it('should render the Github link', () => {
    const githubLink = screen.getByTestId('github');
    expect(githubLink).toBeInTheDocument();
  });
});