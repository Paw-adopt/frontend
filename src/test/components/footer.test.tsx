import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer';

describe('Footer', () => {
  beforeEach(() => { 
    render(<Footer />); 
  });

  it('should render the Facebook icon', () => {
    const privacyPolicyLink = screen.getByTestId('facebook-link');
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  it('should render the Instagram icon', () => {
    const contactLink = screen.getByTestId('instagram-link');
    expect(contactLink).toBeInTheDocument();
  });

  it('should render the Github icon', () => {
    const githubLink = screen.getByTestId('github-link');
    expect(githubLink).toBeInTheDocument();
  });
});