import React, {useState} from "react";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

/**
 * Represents a navigation bar component.
 * 
 * @returns {JSX.Element} The JSX code that represents the navigation bar.
 */

const navigation = [
    { name: 'Publica con nosotros', href: '/publica-con-nosotros' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Adopciones', href: '#' },
  ]
  
export default function NavBar(): JSX.Element {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5" data-testid="logo">
            <div>
                <span className="text-pink-700 text-2xl font-bold capitalize">Paw</span>
                <span className="text-black text-2xl font-bold  capitalize"> adopt</span></div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900" data-testid={`nav-link-${item.name}`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button"
                className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-3xl text-sm px-6 py-2.5 text-center md:mr-0">
                            Registrarse</button>
            <button type="button"
                className="text-pink-700 focus:outline-none font-bold text-sm px-6 py-2.5 text-center mr-3 md:mr-0">
                            Iniciar sesión</button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} data-testid = "mobile-menu">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      data-testid={`nav-link-${item.name}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-bold leading-7 text-pink-700 hover:bg-gray-50"
                    data-testid="login-link"
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    );
}