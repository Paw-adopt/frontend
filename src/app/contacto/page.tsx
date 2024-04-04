"use client";

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';


export default function Example() {
  const [agreed, setAgreed] = useState(false)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main className="bg-white">
        <NavBar/>
        <section className='relative inset-0 px-6 py-28 lg:px-8 min-h-screen overflow-hidden space-y-6'>
          <div className="mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  ¡Contáctanos!</h2>
              <p className="mt-2 text-base leading-8 text-gray-600">
              ¿Necesitas ayuda o tienes alguna pregunta? ¡Estamos aquí para ti!
              </p>
          </div>
          <form action="#" method="POST" className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nombre
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Apellido
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Correo
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <button
                disabled={!agreed}
                type="submit"
                className={agreed ? `block w-full rounded-md bg-pink-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`: `block w-full rounded-md bg-gray-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm cursor-not-allowed`}
              >
                Hablemos
              </button>
            </div>
          </form>
        </section>
        <Footer/>
    </main>
  )
}