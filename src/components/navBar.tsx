/**
 * Represents a navigation bar component.
 * 
 * @returns {JSX.Element} The JSX code that represents the navigation bar.
 */
export default function NavBar() {
    return (
        <header className="bg-white fixed w-full z-20 top-0 left-0 border-">
            <nav className="w-full flex flex-wrap items-center justify-between px-12 pt-10">
                <a href="/" className="flex items-center gap-2">

                    <span className="text-pink-700 text-2xl font-bold capitalize">Paw</span>
                    <span className="text-black text-2xl font-bold capitalize"> adopt</span>
                </a>
                <div className="flex md:order-2">
                    <div className="flex flex-row">
                        <button type="button"
                            className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-3xl text-lg px-6 py-2.5 text-center md:mr-0">
                            Registrarse</button>
                        <button type="button"
                            className="text-pink-700 focus:outline-none font-bold text-lg px-6 py-2.5 text-center mr-3 md:mr-0">
                            Iniciar sesión</button>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="block py-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent font-semibold">
                                Publica con nostros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent font-semibold">
                                Donaciones</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent font-semibold">
                                Adopciones</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}