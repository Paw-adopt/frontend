
export default function Footer(){

    return(   
    <footer className="bg-white rounded-lg shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span data-testid = "copyright" className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a className="hover:underline">Paw adopt™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a data-testid = "privacy-policy" href="javascript:void(0)" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a data-testid = "contact" href="/contacto" className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
            <li>
                <a data-testid = "github" href="https://github.com/Paw-adopt" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>
    </footer>

    )
}