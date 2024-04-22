import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrivacyPolicy from '@/app/politica-de-privacidad/page';

describe('PrivacyPolicy', () => {
  beforeEach(() => {
    render(<PrivacyPolicy />);
  });

  it('should render the main header', () => {
    const headerElement = screen.getByRole('heading', { name: /Política de privacidad/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the last update date', () => {
    const dateElement = screen.getByText(/09 de abril del 2024/i);
    expect(dateElement).toBeInTheDocument();
  });

  it('should render the privacy policy sections', () => {
    const sections = [
      'data-recopilation',
      'personal-data-protection',
      'third-party-data',
      'third-party-links',
      'changes-in-policy'
    ];

    sections.forEach(section => {
      const sectionElement = screen.getByTestId(section);
      expect(sectionElement).toBeInTheDocument();
    });
  });
});