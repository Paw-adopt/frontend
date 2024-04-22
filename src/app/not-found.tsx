import Link from 'next/link'

export default function NotFound() {
  return(
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full">
      <body class="h-full">
      ```
    */}
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-bold text-pink-700">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Lo sentimos, la página que buscas no está disponible.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-pink-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Volver a inicio
          </a>
        </div>
      </div>
    </main>
  </>
  )
}