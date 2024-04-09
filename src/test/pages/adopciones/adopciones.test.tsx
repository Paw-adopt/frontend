import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adoptions from '@/app/adopciones/page';

afterEach(cleanup);

describe('Adoptions', () => {
    beforeEach(() => {
      render(<Adoptions />);
      
    });
  
    it('should render the header with correct text', () => {
      const header = screen.getByRole('heading', { name: /¡Encuentra a tu nuevo mejor amigo aquí!/i });
      expect(header).toBeInTheDocument();
    });
  
    it('should render the features list', () => {
      const featuresList = screen.getByRole('list');
      expect(featuresList).toBeInTheDocument();
    });
  
    it('should render the adoption call to action', () => {
      const ctaButton = screen.getByRole('button', { name: /¡Adopta!/i });
      expect(ctaButton).toBeInTheDocument();
    });
  });