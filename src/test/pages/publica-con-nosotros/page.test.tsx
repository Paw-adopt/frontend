import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PublishWithUs from '@/app/publica-con-nosotros/page';


describe('PublishWithUs', () => {
  beforeEach(() => {
    render(<PublishWithUs />);
  });

  it('should render the NavBar component', () => {
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  it('should render the Footer component', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the page title', () => {
    const title = screen.getByText(/Únete en nuestra misión de salvar vidas/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the "Colabora con nosotros" section', () => {
    const sectionTitle = screen.getByText(/Colabora con nosotros/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  it('should render the mission statement', () => {
    const missionStatement = screen.getByText(/En Paw adoption, estamos dedicados a cambiar vidas: las de los animales sin hogar y las de quienes los cuidan. Nuestra misión es simple pero poderosa: encontrar hogares llenos de amor para todas las mascotas necesitadas./i);
    expect(missionStatement).toBeInTheDocument();
  });
});