"use client"
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";

export default function HomePage() {


  return (
    <div className="bg-white">
      <NavBar />
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen scrollbar-none">
        <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¡Adopta hoy y encuentra a tu mejor amigo peludo!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Denle una segunda oportunidad a un animal necesitado, llene su hogar con amor y felicidad
            </p>
            <div data-testid="adopt-button" className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-3xl bg-pink-700 px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800"
              >
                ¡Adopta!
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
